import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Project Management Platform",
    description:
      "A full-stack project management platform built with ReactJs, NodeJs, TypeScript, and Tailwind CSS.",
    technologies: ["ReactJs", "NodeJs", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/ClowderDev/project-management",
    demoLink: "",
    image: "/projects/project-management.png",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Node.js, TypeScript, Prisma and Tailwind CSS.",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/ClowderDev/ecommerce",
    demoLink: "",
    image: "/projects/ecommerce.png",
  },
];
