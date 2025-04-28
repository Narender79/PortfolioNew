"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  duration: string
  description: string[]
  link: string
  animationVariant: any
}

const ProjectCard = ({ title, duration, description, link, animationVariant }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30 h-full flex flex-col"
      variants={animationVariant}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-green-400">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition-colors"
          aria-label={`Visit ${title} project`}
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="text-gray-400 text-sm mb-4">{duration}</p>
      <ul className="space-y-2 mb-4 flex-grow">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ProjectCard
