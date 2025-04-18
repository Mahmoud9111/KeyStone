"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Property } from "../lib/propertyData"
import { mockProperties } from "../lib/propertyData"
import { cn } from "../lib/utils"

interface PropertyCarouselProps {
  properties: Property[]
}

export default function Projects({ properties = mockProperties }: PropertyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const maxIndex = properties.length - 1

  const handlePrevious = useCallback(() => {
    setActiveIndex(activeIndex === 0 ? maxIndex : activeIndex - 1)
  }, [activeIndex, maxIndex])

  const handleNext = useCallback(() => {
    setActiveIndex(activeIndex === maxIndex ? 0 : activeIndex + 1)
  }, [activeIndex, maxIndex])

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(handleNext, 2000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlaying, handleNext])

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-12 space-y-4 md:space-y-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 px-2 sm:px-0"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Properties</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-lg">Explore our handpicked selection of luxury properties, each offering unique features and premium locations.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left md:text-right space-y-2 px-2 sm:px-0"
        >
          <p className="text-lg sm:text-xl font-semibold text-gray-900">Discover Your Dream Home</p>
          <p className="text-sm sm:text-base text-gray-600">Browse through our exclusive collection</p>
          <p className="text-sm sm:text-base text-gray-600">Over 50+ premium properties available</p>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {properties.map((property, index) => {
          const isPrevious = index === (activeIndex === 0 ? maxIndex : activeIndex - 1)
          const isActive = index === activeIndex
          const isNext = index === (activeIndex === maxIndex ? 0 : activeIndex + 1)

          if (!isPrevious && !isActive && !isNext) return null

          return (
            <div
              key={property.id}
              className={cn(
                "transition-all duration-700 ease-in-out absolute",
                isPrevious ? "transform -translate-x-full scale-75 opacity-30 blur-sm" : "",
                isActive ? "transform translate-x-0 scale-100 opacity-100 relative bg-white" : "",
                isNext ? "transform translate-x-full scale-75 opacity-30 blur-sm" : "",
              )}>
              <div className={cn(
                "overflow-hidden rounded-xl",
                isActive ? "w-full sm:w-[500px] md:w-[600px]" : "w-3/4 sm:w-[350px] md:w-[400px]"
              )}>
                <img
                  src={property.imageUrl || "/placeholder.svg"}
                  alt={property.name}
                  className="object-cover w-full aspect-[4/2] rounded-b-xl"
                  loading="lazy"
                />
                {isActive && (
                  <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 bg-white">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-medium text-gray-900">{property.name}</h2>
                      <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">{property.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-medium text-gray-900">${property.price.toLocaleString()}</p>
                      <div className="mt-2 text-gray-600">
                        <p>{property.bedrooms} bedrooms</p>
                        <p>{property.bathrooms} bathrooms</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </motion.div>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-white w-4" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 text-white z-30 transition-all duration-300 hover:scale-110"
        aria-label="Previous property"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 text-white z-30 transition-all duration-300 hover:scale-110"
        aria-label="Next property"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
    </div>
  )
}
