import type { iconPaths } from "./IconPaths";

interface SkillSection {
	title: string;
	icon: keyof typeof iconPaths;
	items: Array<string>;
}

export const SkillsData: SkillSection[] = [
	{
		title: "Languages",
		icon: "translate",
		items: [
			"Python",
			"SQL",
			"R",
			"HTML",
			"CSS",
			"Javascript",
			"Java",
			"C",
			"C++",
			"MATLAB",
			"LaTeX",
		],
	},
	{
		title: "Data · AI · ML",
		icon: "gear",
		items: [
			"PyTorch",
			"Azure ML",
			"Databricks",
			"Microsoft SQL Server",
			"Power BI",
		],
	},
	{
		title: "Tools",
		icon: "wrench",
		items: [
			"Azure",
			"Linux",
			"Bash",
			"Git",
			"Astro",
			"React",
			"Node.js",
			"Prisma",
		],
	},
	{
		title: "Art · Design",
		icon: "art",
		items: [
			"Blender",
			"Maya",
			"Inventor",
			"Photoshop",
			"InDesign",
			"Illustrator",
			"Clip Studio",
		],
	},
];
