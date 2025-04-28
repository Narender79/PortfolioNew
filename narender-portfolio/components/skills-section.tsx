"use client"

import { motion } from "framer-motion"

interface SkillsSectionProps {
  animationVariant: any
}

const SkillsSection = ({ animationVariant }: SkillsSectionProps) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "C++", "HTML/CSS", "JavaScript", "SQL", "Shell Programming"],
    },
    {
      title: "Technologies/Frameworks/Tools",
      skills: ["Linux", "Git", "VS Code", "Bootstrap", "Docker", "Ubuntu"],
    },
    {
      title: "Additional Skills",
      skills: ["Data Structures", "OOPS", "DBMS", "Web Development", "NMAP", "WireShark", "TMAC", "Metasploit"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          className="bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30"
          variants={animationVariant}
          custom={index}
          transition={{ delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-green-400">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillsSection
