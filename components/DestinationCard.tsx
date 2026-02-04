"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Destination {
  id: number
  name: string
  period: string
  image: string
  description: string
  highlights: string[]
  price: string
}

export default function DestinationCard({ destination }: { destination: Destination }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
      data-aos="fade-up"
      data-aos-delay={destination.id * 100}
    >
      <div className="relative overflow-hidden rounded-lg border border-accent/30 hover:border-accent/60 transition-colors bg-secondary h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <p className="text-accent text-sm font-semibold mb-2">{destination.period}</p>
            <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>
            <p className="text-gray-300 mb-4">{destination.description}</p>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <p className="text-accent text-sm font-semibold mb-2">Points forts:</p>
            <ul className="text-sm text-gray-400 space-y-1">
              {destination.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center">
                  <span className="text-accent mr-2">✦</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-4 border-t border-accent/20">
            <span className="text-xl font-bold text-accent">{destination.price}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Réserver
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
