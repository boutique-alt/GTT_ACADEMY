import { courseDetailSidebarGroups } from "@/data/site";

/** Sidebar order for TEFL/TESOL pages — TESOL group first for quick navigation. */
export const tesolFirstSidebarGroups = (() => {
  const tesol = courseDetailSidebarGroups.find((g) => g.title.startsWith("TEFL/TESOL"));
  const rest = courseDetailSidebarGroups.filter((g) => !g.title.startsWith("TEFL/TESOL"));
  return tesol ? [tesol, ...rest] : courseDetailSidebarGroups;
})();

/** Sidebar order for Specialized course pages — Specialized group first. */
export const specializedFirstSidebarGroups = (() => {
  const specialized = courseDetailSidebarGroups.find((g) => g.title === "Specialized Courses");
  const rest = courseDetailSidebarGroups.filter((g) => g.title !== "Specialized Courses");
  return specialized ? [specialized, ...rest] : courseDetailSidebarGroups;
})();
