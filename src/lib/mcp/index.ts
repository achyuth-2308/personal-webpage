import { defineMcp } from "@lovable.dev/mcp-js";

import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listProjectsTool from "./tools/list-projects";
import listPublicationsTool from "./tools/list-publications";
import listSkillsTool from "./tools/list-skills";
import listAwardsTool from "./tools/list-awards";

export default defineMcp({
  name: "achyuth-mukund-portfolio",
  title: "Achyuth Mukund — Portfolio",
  version: "1.0.0",
  instructions:
    "Read-only access to Achyuth Mukund's professional portfolio. Use `get_profile` for biography, education and contact links; `list_experience` for work history; `list_projects` for engineering projects (filterable); `list_publications` for research papers, DOIs and abstracts; `list_skills` for the technical stack and certifications; and `list_awards` for honours, the career timeline and achievements. All data is public and static.",
  tools: [
    getProfileTool,
    listExperienceTool,
    listProjectsTool,
    listPublicationsTool,
    listSkillsTool,
    listAwardsTool,
  ],
});
