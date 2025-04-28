"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Certificates", href: "#" },
    { name: "Achievements", href: "#" },
    { name: "Education", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3 shadow-lg shadow-green-900/20" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-green-500 font-bold text-2xl"
        >
          NK
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-green-500 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-gray-300 hover:text-green-500 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
