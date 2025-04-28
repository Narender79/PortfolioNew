"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  location: string
  duration: string
  animationVariant: any
}

const EducationCard = ({ institution, degree, location, duration, animationVariant }: EducationCardProps) => {
  return (
    <motion.div
      className="bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30"
      variants={animationVariant}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <div className="flex items-center mb-2">
            <GraduationCap className="text-green-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-green-400">{institution}</h3>
          </div>
          <p className="text-white mb-2">{degree}</p>
          <div className="flex items-center text-gray-400">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-400 mt-2 md:mt-0">{duration}</p>
      </div>
    </motion.div>
  )
}

export default EducationCard
