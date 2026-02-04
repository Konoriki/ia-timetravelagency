"use client"

import { motion } from "framer-motion"
import DestinationCard from "./DestinationCard"

const destinations = [
  {
    id: 1,
    name: "Paris 1889",
    period: "Belle Époque",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=600&fit=crop",
    description: "Assistez à l'Exposition Universelle et admirez la toute nouvelle Tour Eiffel. Dégustez les délices de la Belle Époque dans les cafés parisiens légendaires.",
    highlights: ["Tour Eiffel", "Exposition Universelle", "Moulin Rouge", "Musée du Louvre"],
    price: "4,999€",
  },
  {
    id: 2,
    name: "Crétacé",
    period: "-65 Millions d'années",
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=600&fit=crop",
    description: "Plongez dans le monde préhistorique et observez les dinosaures dans leur habitat naturel. Une aventure inédite au cœur de la nature primitive.",
    highlights: ["Voir les T-Rex", "Jungle Préhistorique", "Fossiles Vivants", "Safari Crétacé"],
    price: "7,499€",
  },
  {
    id: 3,
    name: "Florence 1504",
    period: "Renaissance",
    image: "https://images.unsplash.com/photo-1523217582562-430f63602022?w=500&h=600&fit=crop",
    description: "Rencontrez Léonard de Vinci et Michel-Ange. Explorez les chefs-d'œuvre de la Renaissance italienne dans leurs cadres d'origine.",
    highlights: ["Michel-Ange", "Galerie des Offices", "Ponte Vecchio", "Art Renaissance"],
    price: "5,999€",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          id="destinations"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-accent">Destinations</span>
          </h2>
          <p className="text-xl text-gray-400">
            Choisissez votre époque et vivez une aventure extraordinaire
          </p>
        </motion.div>

        {/* Destination Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
