import { defineTool } from "@lovable.dev/mcp-js";
import { experience } from "../../../data/portfolio";

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List Achyuth Mukund's professional work experience, including company, role, team, dates, location, responsibilities and technologies, plus the internal role progression within each company.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
