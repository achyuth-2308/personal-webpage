import { defineTool } from "@lovable.dev/mcp-js";
import { publications, researchPhilosophy, researchProfiles } from "../../../data/portfolio";

export default defineTool({
  name: "list_publications",
  title: "List research publications",
  description:
    "List Achyuth Mukund's research publications and book chapters with authors, venue, publisher, year, DOI, publication status and abstracts, along with his research philosophy and scholarly profile links (Google Scholar, ResearchGate, ORCID).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      publications: (publications as Array<Record<string, unknown>>).map((entry) => {
        const { images: _images, ...rest } = entry;
        return rest;
      }),
      researchPhilosophy,
      researchProfiles,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
