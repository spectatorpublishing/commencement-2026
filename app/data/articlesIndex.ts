import university from "./uniarticles";
import artsCulture from "./acarticles";
import sport from "./sportsarticles";

export const articlesBySection: Record<string, any[]> = {
  university: university,
  ac: artsCulture,
  sports: sport,
  // Add others here...
};