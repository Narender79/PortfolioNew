"use client"

import { motion } from "framer-motion"

interface ExperienceCardProps {
  company: string
  location: string
  position: string
  duration: string
  description: string[]
  animationVariant: any
}

const ExperienceCard = ({
  company,
  location,
  position,
  duration,
  description,
  animationVariant,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30"
      variants={animationVariant}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-green-400">{position}</h3>
          <p className="text-white">
            {company}, {location}
          </p>
        </div>
        <p className="text-gray-400 mt-2 md:mt-0">{duration}</p>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ExperienceCard
