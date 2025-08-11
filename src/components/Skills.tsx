"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiNestjs,
  SiPrisma,
  SiRedis,
  SiGraphql,
  SiPostman,
} from "react-icons/si";
import { fadeInUp, staggerContainer } from "@/utils/animations";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "database" | "tools";
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-600 dark:text-gray-300" />,
    category: "backend",
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="text-red-500" />,
    category: "backend",
  },
  //   {
  //     name: "GraphQL",
  //     icon: <SiGraphql className="text-pink-500" />,
  //     category: "backend",
  //   },

  // Database
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-700" />,
    category: "database",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    category: "database",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-gray-800 dark:text-white" />,
    category: "database",
  },
  //   {
  //     name: "Redis",
  //     icon: <SiRedis className="text-red-600" />,
  //     category: "database",
  //   },

  // Tools
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600" />,
    category: "tools",
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-blue-500" />,
    category: "tools",
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-600" />,
    category: "tools",
  },
  //   {
  //     name: "AWS",
  //     icon: <FaAws className="text-orange-400" />,
  //     category: "tools",
  //   },
];

const categoryColors = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  database:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  tools:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
};

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-dark/50 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-3 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm mb-2">{skill.name}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  categoryColors[skill.category]
                }`}
              >
                {categoryLabels[skill.category]}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {Object.entries(categoryLabels).map(([key, label]) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === key
            );

            return (
              <motion.div
                key={key}
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold mb-2">{label}</h3>
                <p className="text-2xl font-bold text-primary mb-2">
                  {categorySkills.length}
                </p>
                <p className="text-sm text-secondary">Technologies</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
