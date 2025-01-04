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
			"C++",
			"SQL",
			"Java",
			"TypeScript",
			"JavaScript",
			"HTML",
			"CSS",
			"C",
			"LaTeX",
		],
	},
	{
		title: "Data · AI · ML",
		icon: "gear",
		items: [
			"PyTorch",
			"PostgreSQL",
			"Supabase",
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
			"Vim",
			"Astro",
			"React",
			"Node.js",
			"Godot",
			"Unreal Engine",
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
			"Illustrator",
			"Clip Studio",
			"Krita",
		],
	},
];
