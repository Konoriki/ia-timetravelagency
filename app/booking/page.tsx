"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface BookingForm {
  destination: string
  date: string
  travelers: number
  email: string
  name: string
}

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingForm>({
    destination: "Paris 1889",
    date: "",
    travelers: 1,
    email: "",
    name: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const destinations = [
    { value: "Paris 1889", label: "🗼 Paris 1889 - Belle Époque" },
    { value: "Crétacé", label: "🦖 Crétacé -65M" },
    { value: "Florence 1504", label: "🎨 Florence 1504 - Renaissance" },
  ]

  const prices: Record<string, number> = {
    "Paris 1889": 4999,
    "Crétacé": 7499,
    "Florence 1504": 5999,
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "travelers" ? parseInt(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        destination: "Paris 1889",
        date: "",
        travelers: 1,
        email: "",
        name: "",
      })
    }, 3000)
  }

  const totalPrice = (prices[formData.destination] || 0) * formData.travelers

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary py-20 px-4 pt-32">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-2 text-accent text-center">
            Réservez Votre Voyage Temporel
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Remplissez le formulaire pour commencer votre aventure
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-secondary border border-accent/30 rounded-lg p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-lg font-semibold mb-2">Nom Complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  required
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent text-lightText"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@example.com"
                  required
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent text-lightText"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-lg font-semibold mb-2">Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent text-lightText cursor-pointer"
                >
                  {destinations.map((dest) => (
                    <option key={dest.value} value={dest.value}>
                      {dest.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-lg font-semibold mb-2">Date de Départ</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent text-lightText"
                />
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-lg font-semibold mb-2">Nombre de Voyageurs</label>
                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent text-lightText"
                />
              </div>

              {/* Price Summary */}
              <div className="bg-primary border border-accent/20 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Prix unitaire:</span>
                  <span className="font-semibold">{prices[formData.destination]}€</span>
                </div>
                <div className="flex justify-between mb-4 pb-4 border-b border-accent/20">
                  <span className="text-gray-400">Nombre de voyageurs:</span>
                  <span className="font-semibold">{formData.travelers}</span>
                </div>
                <div className="flex justify-between text-xl">
                  <span className="font-bold">Prix Total:</span>
                  <span className="text-accent font-bold text-2xl">{totalPrice}€</span>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-accent to-yellow-600 text-primary font-bold text-lg rounded-lg hover:shadow-lg transition-all"
              >
                Confirmer la Réservation
              </motion.button>

              <p className="text-center text-gray-500 text-sm">
                Paiement sécurisé • Confirmation par email immédiate
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-accent/20 to-yellow-600/10 border-2 border-accent rounded-lg p-8 text-center"
            >
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold mb-2">Réservation Confirmée!</h2>
              <p className="text-xl text-gray-300 mb-4">
                Merci {formData.name}! Nous avons envoyé une confirmation à {formData.email}
              </p>
              <p className="text-accent text-lg font-semibold mb-4">
                Montant: {totalPrice}€
              </p>
              <p className="text-gray-400">
                Vous recevrez les détails du voyage dans les 24 heures. Préparez-vous pour l'aventure!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-accent">Questions Fréquentes</h3>
          <div className="space-y-4">
            {[
              {
                q: "Puis-je modifier ma réservation?",
                a: "Oui, vous pouvez modifier gratuitement jusqu'à 14 jours avant le départ.",
              },
              {
                q: "Quels modes de paiement acceptez-vous?",
                a: "Carte bancaire, PayPal, virement, et cryptomonnaies acceptées.",
              },
              {
                q: "Y a-t-il une garantie d'assurance?",
                a: "Oui, tous les forfaits incluent une assurance voyage complète.",
              },
              {
                q: "Puis-je apporter des amis?",
                a: "Absolument! Des réductions de groupe sont disponibles à partir de 4 personnes.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary border border-accent/20 rounded-lg p-4"
              >
                <h4 className="font-semibold mb-2 text-lg">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
