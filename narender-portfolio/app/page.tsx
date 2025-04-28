"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, GitlabIcon as GitHub, Linkedin, Mail, Phone } from "lucide-react"
import AnimationToggle from "@/components/animation-toggle"
import Header from "@/components/header"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import CertificateCard from "@/components/certificate-card"
import AchievementCard from "@/components/achievement-card"
import CodingProfileCard from "@/components/coding-profile-card"
import EducationCard from "@/components/education-card"

export default function Home() {
  const [animationStyle, setAnimationStyle] = useState<number>(0)

  const animationVariants = [
    {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    },
    {
      hidden: { opacity: 0, rotate: -5 },
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
    },
    {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
    },
  ]

  const changeAnimation = () => {
    setAnimationStyle((prev) => (prev + 1) % animationVariants.length)
  }

  return (
    <div className="min-h-screen bg-black text-white" onClick={changeAnimation}>
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="md:w-1/2 z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-green-500"
            variants={animationVariants[animationStyle]}
          >
            Narender Kalaliya
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-6 text-gray-300" variants={animationVariants[animationStyle]}>
            Computer Science Engineer
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 mb-8" variants={animationVariants[animationStyle]}>
            <a
              href="mailto:kalaliya.narender@gmail.com"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Mail size={18} /> kalaliya.narender@gmail.com
            </a>
            <a href="tel:+919053741703" className="flex items-center gap-2 text-green-400 hover:text-green-300">
              <Phone size={18} /> +91 9053741703
            </a>
            <a
              href="https://linkedin.com/in/kalaliya-narender"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/Narender79"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <GitHub size={18} /> GitHub
            </a>
          </motion.div>
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all"
            variants={animationVariants[animationStyle]}
          >
            <Download size={18} /> Download Resume
          </motion.button>
        </div>
        <motion.div className="md:w-1/3 mt-8 md:mt-0 z-10" variants={animationVariants[animationStyle]}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-green-500 overflow-hidden mx-auto">
            {/* Replace with actual photo */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-green-500">
              <span className="text-lg">Your Photo Here</span>
            </div>
          </div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900 opacity-10 rounded-bl-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500 opacity-10 rounded-tr-full z-0"></div>
      </motion.section>

      {/* Animation Toggle */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <AnimationToggle
          currentStyle={animationStyle}
          onChange={setAnimationStyle}
          totalStyles={animationVariants.length}
        />
      </div>

      {/* Skills Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Skills
          </motion.h2>
          <SkillsSection animationVariant={animationVariants[animationStyle]} />
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Experience
          </motion.h2>
          <ExperienceCard
            company="PHN"
            location="Pune, India"
            position="Programming Languages Intern"
            duration="Apr 2023 – Jun 2023"
            description={[
              "Worked with Python and Pandas to process and analyze large datasets",
              "Performed data cleaning, transformation, and manipulation to improve data quality",
              "Utilized Pandas functions for handling missing values, merging datasets, and performing aggregations",
            ]}
            animationVariant={animationVariants[animationStyle]}
          />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="LeetCode Extractor"
              duration="Mar 2025 - Present"
              description={[
                "Built a Chrome extension to automatically extract accepted LeetCode submissions",
                "Implemented a MutationObserver to handle dynamic page changes, ensuring reliable code extraction without manual navigation",
                "Designed a local storage system to organize submissions by problem and language for quick access and analysis",
              ]}
              link="#"
              animationVariant={animationVariants[animationStyle]}
            />
            <ProjectCard
              title="Traffic Maper"
              duration="Feb 2025 - Mar 2025"
              description={[
                "Built a tool using the dpkt library to parse Wireshark pcap files",
                "Generated KML files for visualizing traffic routes in Google Earth, enhancing geographic analysis of packet flow",
                "Integrated pygeoip for enhanced IP geolocation",
              ]}
              link="#"
              animationVariant={animationVariants[animationStyle]}
            />
            <ProjectCard
              title="Drum Kit"
              duration="Mar 2024 - Jun 2024"
              description={[
                "Created and launched a dynamic web-based game to simulate the Drum Kit experience",
                "Crafted instrument icons that play their respective sounds upon user hover interaction",
                "Designed and ensured a visually appealing and responsive interface with CSS for optimal user experience on various devices",
              ]}
              link="#"
              animationVariant={animationVariants[animationStyle]}
            />
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Certificates
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificateCard
              title="Data Structures and Algorithms"
              date="Jul 2024"
              description="Certification in Data Structures and Algorithms, gaining proficiency in problem-solving and optimization."
              animationVariant={animationVariants[animationStyle]}
            />
            <CertificateCard
              title="Python Course"
              date="Mar 2023"
              description="Received a certificate for completing the Python course from Cipher Schools."
              animationVariant={animationVariants[animationStyle]}
            />
            <CertificateCard
              title="Aptitude Test"
              date="Nov 2022"
              description="Secured 20th position in aptitude test organized by Student Organization Coding Blocks LPU."
              animationVariant={animationVariants[animationStyle]}
            />
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AchievementCard
              title="GeeksforGeeks"
              description="Solved 250+ DSA problems on GeeksforGeeks, have a rating of 1442, College Rank: 2198."
              icon="🏆"
              animationVariant={animationVariants[animationStyle]}
            />
            <AchievementCard
              title="LeetCode"
              description="Tackled 450+ coding questions on LeetCode, achieving a top rating of 1512."
              icon="🏆"
              animationVariant={animationVariants[animationStyle]}
            />
            <AchievementCard
              title="LeetCode Badge"
              description="Tenacious coder, distinguished by a coveted 200-day LeetCode badge."
              icon="🏅"
              animationVariant={animationVariants[animationStyle]}
            />
            <AchievementCard
              title="Coding Ninjas"
              description="Completed 100+ coding challenges on Coding Ninjas, reaching a peak rating of 1539."
              icon="🏆"
              animationVariant={animationVariants[animationStyle]}
            />
          </div>
        </div>
      </motion.section>

      {/* Coding Profiles Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Coding Profiles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CodingProfileCard platform="LeetCode" link="#" animationVariant={animationVariants[animationStyle]} />
            <CodingProfileCard platform="GeeksForGeeks" link="#" animationVariant={animationVariants[animationStyle]} />
            <CodingProfileCard platform="CodingNinjas" link="#" animationVariant={animationVariants[animationStyle]} />
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants[animationStyle]}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-green-500 text-center"
            variants={animationVariants[animationStyle]}
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            <EducationCard
              institution="Lovely Professional University"
              degree="BTech in Computer Science"
              location="Phagwara, Punjab"
              duration="Sep. 2022 – Present"
              animationVariant={animationVariants[animationStyle]}
            />
            <EducationCard
              institution="Suraj School"
              degree="Intermediate"
              location="Rewari, Haryana"
              duration="Sep. 2017 – 2019"
              animationVariant={animationVariants[animationStyle]}
            />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-black border-t border-green-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Narender Kalaliya. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="mailto:kalaliya.narender@gmail.com" className="text-green-500 hover:text-green-400">
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kalaliya-narender"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Narender79"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              <GitHub size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
