"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour! 👋 Je suis l'assistant virtuel de TimeTravel Agency. Comment puis-je vous aider aujourd'hui?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const destinationInfo = {
    "paris 1889": {
      name: "Paris 1889",
      info: "Découvrez la Belle Époque! Vous verrez la toute nouvelle Tour Eiffel lors de l'Exposition Universelle. Prix: 4,999€",
      attractions: "Monuments : Tour Eiffel, Louvre. Événements : Exposition Universelle, Moulin Rouge.",
    },
    "crétacé": {
      name: "Crétacé",
      info: "Plongez dans le monde des dinosaures! Observez les créatures préhistoriques dans leur habitat naturel. Prix: 7,499€",
      attractions: "Activités : Safari T-Rex, Jungle Préhistorique, Observation des Fossiles Vivants.",
    },
    "florence 1504": {
      name: "Florence 1504",
      info: "Rencontrez les grands maîtres de la Renaissance! Michel-Ange, Léonard de Vinci. Prix: 5,999€",
      attractions: "Artistes : Michel-Ange, Léonard de Vinci. Lieux : Galerie des Offices, Ponte Vecchio.",
    },
  }

  const getBotResponse = (userMessage: string): string => {
    const messageLower = userMessage.toLowerCase()

    // Check for destination queries
    for (const [key, value] of Object.entries(destinationInfo)) {
      if (messageLower.includes(key)) {
        return `${value.info}\n\n${value.attractions}`
      }
    }

    // Common questions
    if (
      messageLower.includes("prix") ||
      messageLower.includes("coût") ||
      messageLower.includes("tarif")
    ) {
      return "Nos tarifs varient selon la destination:\n• Paris 1889: 4,999€\n• Crétacé: 7,499€\n• Florence 1504: 5,999€\n\nTous nos forfaits incluent l'hébergement, les repas et un guide professionnel."
    }

    if (messageLower.includes("réserver") || messageLower.includes("booking")) {
      return "Excellente question! Pour réserver, veuillez cliquer sur le bouton 'Réserver' sur les cartes de destination ou remplissez notre formulaire de réservation. Nos équipes traiteront votre demande dans les 24 heures."
    }

    if (messageLower.includes("quoi") || messageLower.includes("quel")) {
      return "Je peux vous aider à choisir la destination parfaite! Préférez-vous l'histoire, la nature, l'art ou l'aventure? Dites-moi vos intérêts et je vous recommanderai la meilleure époque pour vous."
    }

    if (messageLower.includes("merci") || messageLower.includes("thanks")) {
      return "De rien! 😊 Y a-t-il autre chose que je puisse faire pour vous?"
    }

    if (messageLower.includes("bonjour") || messageLower.includes("hello")) {
      return "Bienvenue! Je suis ravi de vous aider. Que souhaitez-vous savoir sur nos destinations de voyage temporel?"
    }

    // Default response
    return "C'est une bonne question! Pour plus d'informations détaillées, n'hésitez pas à me demander sur nos destinations, nos prix, ou comment réserver votre voyage temporal inoubliable."
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chatbot Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 w-96 max-w-[calc(100vw-2rem)] h-96 bg-secondary rounded-lg shadow-2xl border border-accent/30 flex flex-col z-40"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-yellow-600 text-primary p-4 rounded-t-lg flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">TimeTravel Assistant</h3>
                <p className="text-sm opacity-90">Toujours disponible</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary hover:opacity-70 transition-opacity"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-accent text-primary font-medium"
                        : "bg-primary border border-accent/30 text-lightText"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-primary border border-accent/30 px-4 py-2 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-accent/20 p-4 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Votre question..."
                className="flex-1 bg-primary border border-accent/30 rounded-lg px-3 py-2 text-lightText focus:outline-none focus:border-accent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-accent to-yellow-600 rounded-full shadow-lg flex items-center justify-center text-primary font-bold text-2xl hover:shadow-xl transition-shadow z-40"
        title="Ouvrir le chat"
      >
        💬
      </motion.button>
    </>
  )
}
