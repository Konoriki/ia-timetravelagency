"use client"

import Hero from "@/components/Hero"
import Destinations from "@/components/Destinations"
import Chatbot from "@/components/Chatbot"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    })
  }, [])

  return (
    <main>
      <Hero />
      <Destinations />
      <Chatbot />
    </main>
  )
}
