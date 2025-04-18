"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { motion } from "framer-motion"

interface QAItem {
  id: string
  title: string
  content: string
}

const qaItems: QAItem[] = [
  {
    id: "craftsmanship",
    title: "Unparalleled Craftsmanship",
    content: "Every detail is meticulously designed and executed to ensure exceptional quality. From the finest materials to masterful finishes, your home reflects timeless precision and care.",
  },
  {
    id: "design",
    title: "Personalized Design",
    content: "Your home should be as unique as you are. Our design team works closely with you to create spaces that reflect your personal style and meet your specific needs.",
  },
  {
    id: "locations",
    title: "Exclusive Locations",
    content: "Situated in the most coveted neighborhoods, our properties offer the perfect balance of privacy, convenience, and natural beauty.",
  },
  {
    id: "innovation",
    title: "Modern Innovation",
    content: "Seamlessly integrated smart home technology and sustainable features enhance your living experience while reducing environmental impact.",
  },
  {
    id: "experience",
    title: "Seamless Experience",
    content: "From your first consultation to long after you move in, our dedicated team ensures your journey with Haven is effortless and exceptional.",
  },

  {
    id: "experience",
    title: "Seamless Experience",
    content: "From your first consultation to long after you move in, our dedicated team ensures your journey with Haven is effortless and exceptional.",
  },
]

export default function Details() {
  const [openSection, setOpenSection] = useState("craftsmanship")

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection("")
    } else {
      setOpenSection(section)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-4">
          The art of exceptional living begins in the details.
        </h1>
        <p className="text-gray-600 text-lg">Discover the details that make every Haven home a masterpiece.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="space-y-6">
          {qaItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t border-gray-200 pt-6"
            >
              <button
                onClick={() => toggleSection(item.id)}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-2xl font-normal">{item.title}</h2>
                <span>
                  {openSection === item.id ? (
                    <Minus className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400" />
                  )}
                </span>
              </button>
              {openSection === item.id && (
                <div className="mt-4 text-gray-600">
                  <p>{item.content}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl aspect-square overflow-hidden"
        >
          <img
            src="/images/qaimg.jpg"
            alt="Luxury home craftsmanship details"
            className="w-full h-[600px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}
