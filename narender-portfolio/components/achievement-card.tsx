"use client"

import { motion } from "framer-motion"

interface AchievementCardProps {
  title: string
  description: string
  icon: string
  animationVariant: any
}

const AchievementCard = ({ title, description, icon, animationVariant }: AchievementCardProps) => {
  return (
    <motion.div
      className="bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30"
      variants={animationVariant}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-green-400">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default AchievementCard
