"use client"

import { motion } from "framer-motion"
import { Code2, ExternalLink } from "lucide-react"

interface CodingProfileCardProps {
  platform: string
  link: string
  animationVariant: any
}

const CodingProfileCard = ({ platform, link, animationVariant }: CodingProfileCardProps) => {
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "LeetCode":
        return "from-yellow-600 to-yellow-400"
      case "GeeksForGeeks":
        return "from-green-600 to-green-400"
      case "CodingNinjas":
        return "from-orange-600 to-orange-400"
      default:
        return "from-green-600 to-green-400"
    }
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      variants={animationVariant}
    >
      <div
        className={`bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30 h-full 
                      hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-300
                      relative overflow-hidden group`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${getPlatformColor(platform)} opacity-10 
                        group-hover:opacity-20 transition-opacity duration-300`}
        ></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center">
            <Code2 className="text-green-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-green-400">{platform}</h3>
          </div>
          <ExternalLink size={18} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.a>
  )
}

export default CodingProfileCard
