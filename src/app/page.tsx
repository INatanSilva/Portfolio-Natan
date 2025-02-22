'use client'

import { BackgroundAnimation } from "@/components/BackgroundAnimation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('inicio')
  const [direction, setDirection] = useState(0)

  const pageOrder = ['inicio', 'sobre', 'projetos', 'habilidades', 'contato']

  const handlePageChange = (newPage: string) => {
    const currentIndex = pageOrder.indexOf(currentPage)
    const newIndex = pageOrder.indexOf(newPage)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setCurrentPage(newPage)
  }

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const pageTransition = {
    type: "tween",
    duration: 0.5
  }

  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.main
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="text-center mb-auto mt-auto relative w-full max-w-4xl px-4"
          >
            {currentPage === 'inicio' && (
              <div>
                <h1 className="text-[72px] font-bold mb-4 tracking-tight relative text-foreground glass-text">
                  Natan Silva
                </h1>
                <p className="text-xl tracking-[6px] text-muted font-light">
                  DESENVOLVEDOR MOBILE
                </p>
              </div>
            )}

            {currentPage === 'sobre' && (
              <div>
                <div className="flex flex-col items-center mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-foreground/10 mb-6 relative">
                    <img
                      src="/gatinlindo.CR2.jpg"
                      alt="Natan Silva"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">Sobre Mim</h2>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  Desenvolvedor mobile apaixonado por criar experiências incríveis para usuários.
                  Com foco em React Native e tecnologias modernas, busco sempre entregar
                  soluções elegantes e performáticas.
                </p>
              </div>
            )}

            {currentPage === 'projetos' && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Adicione seus projetos aqui */}
                  <div className="bg-background/50 p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
                    <p className="text-muted">Descrição do projeto...</p>
                  </div>
                  {/* Mais projetos... */}
                </div>
              </div>
            )}

            {currentPage === 'habilidades' && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">Habilidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">React Native</h3>
                    <div className="h-2 bg-muted/20 rounded-full">
                      <div className="h-full w-[90%] bg-foreground/80 rounded-full" />
                    </div>
                  </div>
                  {/* Mais habilidades... */}
                </div>
              </div>
            )}

            {currentPage === 'contato' && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">Contatos</h2>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-8">
                    <a 
                      href="https://www.linkedin.com/in/natan-silva-925705291" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="https://github.com/inatansilva" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted hover:text-[#333] dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>

                    <a 
                      href="mailto:92834066natan@gmail.com"
                      className="text-muted hover:text-[#EA4335] transition-all duration-300 transform hover:scale-110"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  </div>

                  <p className="text-muted text-sm mt-4">
                    Fique à vontade para entrar em contato através de qualquer uma dessas redes!
                  </p>
                </div>
              </div>
            )}
          </motion.main>
        </AnimatePresence>

        <nav className="fixed bottom-12 bg-background/90 rounded-full px-8 py-4 shadow-lg shadow-foreground/5">
          <ul className="flex items-center gap-12">
            <li>
              <button 
                onClick={() => handlePageChange('inicio')}
                className={`flex items-center gap-2 text-[15px] transition-all duration-300 nav-inicio ${
                  currentPage === 'inicio' ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 4L21 9.5" />
                  <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" />
                </svg>
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => handlePageChange('sobre')}
                className={`flex items-center gap-2 text-[15px] transition-all duration-300 nav-sobre ${
                  currentPage === 'sobre' ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" />
                  <path d="M12 15V12M12 9H12.01" />
                </svg>
                Sobre Mim
              </button>
            </li>
            <li>
              <button 
                onClick={() => handlePageChange('projetos')}
                className={`flex items-center gap-2 text-[15px] transition-all duration-300 nav-projetos ${
                  currentPage === 'projetos' ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" />
                  <path d="M7 7H17M7 12H17M7 17H17" />
                </svg>
                Projetos
              </button>
            </li>
            <li>
              <button 
                onClick={() => handlePageChange('habilidades')}
                className={`flex items-center gap-2 text-[15px] transition-all duration-300 nav-habilidades ${
                  currentPage === 'habilidades' ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18L22 12L16 6" />
                  <path d="M8 6L2 12L8 18" />
                </svg>
                Habilidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => handlePageChange('contato')}
                className={`flex items-center gap-2 text-[15px] transition-all duration-300 nav-contato ${
                  currentPage === 'contato' ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
                </svg>
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
