import { defineTool } from "@lovable.dev/mcp-js";
import { personalInfo, about } from "../../../data/portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Achyuth Mukund's profile: name, location, current focus, bio, education (degrees, institutions, CGPA, coursework), languages spoken, and public links (GitHub, LinkedIn, ORCID, Google Scholar, ResearchGate).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: personalInfo.name,
      location: personalInfo.location,
      tagline: personalInfo.tagline,
      summary: personalInfo.description,
      contact: { email: personalInfo.email, phone: personalInfo.phone },
      links: personalInfo.social,
      bio: about.bio,
      education: about.education.map((entry) => ({
        degree: entry.degree,
        specialization: (entry as { specialization?: string }).specialization ?? null,
        institution: entry.institution,
        duration: entry.duration,
        grade: entry.grade,
        coursework: (entry as { coursework?: string[] }).coursework ?? [],
      })),
      languages: about.languages,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    };
  },
});
