import { defineTool } from "@lovable.dev/mcp-js";
import { timeline, achievements } from "../../../data/portfolio";
import { awards } from "../../../data/awards";

export default defineTool({
  name: "list_awards",
  title: "List awards and milestones",
  description:
    "List Achyuth Mukund's awards, honours and recognitions (including the Guinness World Record, NCC and research honours) alongside his career timeline and notable achievements.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      awards: (awards as Array<Record<string, unknown>>).map((award) => {
        const { image: _image, ...rest } = award;
        return rest;
      }),
      timeline,
      achievements,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
