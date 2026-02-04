import "@/styles/globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "TimeTravel Agency - Voyage dans le Temps",
  description: "Agence de voyage temporel de luxe. Explorez Paris 1889, le Crétacé et la Florence Renaissance.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-primary text-lightText">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
