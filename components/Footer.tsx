"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "À Propos",
      links: ["Notre Agence", "Histoire", "Équipe"],
    },
    {
      title: "Destinations",
      links: ["Paris 1889", "Crétacé", "Florence 1504"],
    },
    {
      title: "Ressources",
      links: ["FAQ", "Blog", "Guides de Voyage"],
    },
    {
      title: "Contact",
      links: ["Email: info@timetravel.agency", "Tél: +33 1 23 45 67 89", "Support 24/7"],
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-secondary to-primary border-t border-accent/20">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-accent/10 to-yellow-600/10 py-12 border-y border-accent/20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Recevez nos dernières offres</h3>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-accent/30 focus:outline-none focus:border-accent text-lightText"
            />
            <button className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-accent mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-accent/20 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-2xl">⏰</span>
            <span className="text-xl font-bold text-accent">TimeTravel Agency</span>
          </div>
          <div className="flex gap-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          <p>
            © {currentYear} TimeTravel Agency. Tous droits réservés. | Projet Pédagogique M2 Digital & IA
          </p>
          <p className="mt-2">
            Voyage Temporel Fictif | Fait avec React, Next.js et Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
