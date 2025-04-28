"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

interface CertificateCardProps {
  title: string
  date: string
  description: string
  animationVariant: any
}

const CertificateCard = ({ title, date, description, animationVariant }: CertificateCardProps) => {
  return (
    <motion.div
      className="bg-black/50 p-6 rounded-lg shadow-lg shadow-green-900/20 border border-green-900/30 h-full flex flex-col"
      variants={animationVariant}
    >
      <div className="flex items-center mb-4">
        <Award className="text-green-500 mr-3" size={24} />
        <h3 className="text-xl font-semibold text-green-400">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">{date}</p>
      <p className="text-gray-300 flex-grow">{description}</p>
    </motion.div>
  )
}

export default CertificateCard
