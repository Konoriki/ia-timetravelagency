"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  category: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous?",
    options: ["Culturelle et artistique", "Aventure et nature", "Élégance et raffinement"],
    category: "experience",
  },
  {
    id: 2,
    question: "Votre période préférée?",
    options: ["Histoire moderne (XIXe-XXe siècle)", "Temps anciens et origines", "Renaissance et classicisme"],
    category: "period",
  },
  {
    id: 3,
    question: "Vous préférez:",
    options: ["L'effervescence urbaine", "La nature sauvage", "L'art et l'architecture"],
    category: "environment",
  },
  {
    id: 4,
    question: "Votre activité idéale:",
    options: ["Visiter des monuments", "Observer la faune", "Explorer des musées"],
    category: "activity",
  },
]

const destinationRecommendations = {
  cultural_art: "Florence 1504",
  cultural_art_museum: "Florence 1504",
  modern_urban_monument: "Paris 1889",
  modern_urban_art: "Paris 1889",
  adventure_nature_wildlife: "Crétacé",
  ancient_nature_wildlife: "Crétacé",
  elegance_modern_urban: "Paris 1889",
  elegance_renaissance_museum: "Florence 1504",
}

export default function PersonalizedQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const handleAnswer = (option: string) => {
    const question = quizQuestions[currentQuestion]
    const newAnswers = {
      ...answers,
      [question.category]: option.toLowerCase().replace(/\s+/g, "_"),
    }
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      generateRecommendation(newAnswers)
      setShowResult(true)
    }
  }

  const generateRecommendation = (finalAnswers: Record<string, string>) => {
    const key = `${finalAnswers.experience}_${finalAnswers.environment}_${finalAnswers.activity}`
    const recommended =
      (destinationRecommendations[key as keyof typeof destinationRecommendations] as string) ||
      "Paris 1889"
    setRecommendation(recommended)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setRecommendation(null)
  }

  const recommendations: Record<string, { description: string; price: string }> = {
    "Paris 1889": {
      description: "Parfait pour vous! La Belle Époque offre l'élégance urbaine que vous recherchez, avec ses monuments iconiques et son atmosphère culturelle raffinée.",
      price: "4,999€",
    },
    "Crétacé": {
      description: "Vous êtes une âme aventurière! Le Crétacé vous permettra d'observer la nature préhistorique dans toute sa splendeur et d'expérimenter une véritable aventure.",
      price: "7,499€",
    },
    "Florence 1504": {
      description: "Excellent choix! La Renaissance florentine est le berceau de l'art et de la culture. Vous y découvrirez les œuvres des plus grands maîtres.",
      price: "5,999€",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {!showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary border border-accent/30 rounded-lg p-8"
          >
            <h1 className="text-4xl font-bold mb-2 text-accent">Quiz de Destination</h1>
            <p className="text-gray-400 mb-8">
              Répondez à quelques questions pour découvrir votre destination idéale
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Question {currentQuestion + 1} sur {quizQuestions.length}</span>
                <span className="text-sm text-accent">{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-primary rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-accent to-yellow-600 h-2 rounded-full"
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  {quizQuestions[currentQuestion].question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left border-2 border-accent/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 font-medium text-lg"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/20 to-yellow-600/10 border border-accent/50 rounded-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Votre Destination Recommandée</h2>
              <h3 className="text-5xl font-bold text-accent mb-4">🎉 {recommendation}</h3>
            </div>

            {recommendation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-secondary border border-accent/30 rounded-lg p-6 mb-6"
              >
                <p className="text-lg text-gray-300 mb-4">
                  {recommendations[recommendation as keyof typeof recommendations]?.description}
                </p>
                <p className="text-2xl font-bold text-accent">
                  À partir de{" "}
                  {recommendations[recommendation as keyof typeof recommendations]?.price}
                </p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-accent/20 border border-accent text-accent font-bold rounded-lg hover:bg-accent/30 transition-colors"
              >
                Recommencer le Quiz
              </button>
              <button className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                Réserver Maintenant
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
