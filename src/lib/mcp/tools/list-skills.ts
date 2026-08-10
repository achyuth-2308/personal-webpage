import { defineTool } from "@lovable.dev/mcp-js";
import { skills, certifications } from "../../../data/portfolio";

export default defineTool({
  name: "list_skills",
  title: "List skills and certifications",
  description:
    "List Achyuth Mukund's technical skills grouped by languages, frameworks, tools and domains, together with his professional certifications and their issuing organisations.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { skills, certifications };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
