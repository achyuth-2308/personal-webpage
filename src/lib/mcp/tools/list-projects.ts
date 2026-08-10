import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../../../data/portfolio";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Achyuth Mukund's engineering projects with descriptions, highlights, technologies, dates and GitHub links. Optionally filter to featured projects or search by keyword.",
  inputSchema: {
    featuredOnly: z.boolean().nullable().describe("When true, return only featured projects."),
    query: z
      .string()
      .nullable()
      .describe("Optional keyword to match against project title, description or technologies."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ featuredOnly, query }) => {
    let results = projects as Array<Record<string, unknown>>;

    if (featuredOnly) {
      results = results.filter((project) => project.featured === true);
    }

    if (query) {
      const needle = query.toLowerCase();
      results = results.filter((project) =>
        JSON.stringify(project).toLowerCase().includes(needle),
      );
    }

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { count: results.length, projects: results },
    };
  },
});
