import { BackgroundAnimation } from "@/components/BackgroundAnimation"

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <main className="text-center mb-auto mt-auto relative">
          <h1 className="relative">
            <span className="text-[72px] font-bold tracking-tight inline-block text-foreground
              relative after:absolute after:inset-0 after:bg-gradient-to-t 
              after:from-foreground/10 after:to-transparent after:blur-sm after:-z-10
            ">
              Natan Silva
            </span>
          </h1>
          <p className="text-xl tracking-[6px] text-muted font-light mt-4">
            DESENVOLVEDOR MOBILE
          </p>
        </main>

        <nav className="fixed bottom-12 bg-background/90 rounded-full px-8 py-4 shadow-lg shadow-foreground/5">
          <ul className="flex items-center gap-12">
            <li>
              <a href="#inicio" className="flex items-center gap-2 text-[15px] text-muted hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 4L21 9.5" />
                  <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" />
                </svg>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="flex items-center gap-2 text-[15px] text-muted hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" />
                  <path d="M12 15V12M12 9H12.01" />
                </svg>
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#projetos" className="flex items-center gap-2 text-[15px] text-muted hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" />
                  <path d="M7 7H17M7 12H17M7 17H17" />
                </svg>
                Projetos
              </a>
            </li>
            <li>
              <a href="#habilidades" className="flex items-center gap-2 text-[15px] text-muted hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18L22 12L16 6" />
                  <path d="M8 6L2 12L8 18" />
                </svg>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contato" className="flex items-center gap-2 text-[15px] text-muted hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
                </svg>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
