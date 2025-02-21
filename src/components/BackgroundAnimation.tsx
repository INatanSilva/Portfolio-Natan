'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines: Array<{
      x: number
      y: number
      length: number
      angle: number
      rotationSpeed: number
      opacity: number
    }> = []

    // Criar linhas iniciais
    for (let i = 0; i < 20; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 150 + 100, // Linhas mais longas
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001, // Rotação mais suave
        opacity: Math.random() * 0.08 + 0.02 // Opacidade mais sutil
      })
    }

    function drawLine(x: number, y: number, length: number, angle: number, opacity: number) {
      if (!ctx) return
      
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(length, 0)
      
      const color = isDark ? '255, 255, 255' : '0, 0, 0'
      ctx.strokeStyle = `rgba(${color}, ${opacity})`
      ctx.lineWidth = 0.5 // Linha mais fina
      ctx.stroke()
      ctx.restore()
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach(line => {
        // Movimento mais suave
        line.x += Math.cos(line.angle) * 0.3
        line.y += Math.sin(line.angle) * 0.3
        line.angle += line.rotationSpeed

        // Reposicionar quando sair da tela
        if (line.x > canvas.width + 100) line.x = -100
        if (line.x < -100) line.x = canvas.width + 100
        if (line.y > canvas.height + 100) line.y = -100
        if (line.y < -100) line.y = canvas.height + 100

        drawLine(line.x, line.y, line.length, line.angle, line.opacity)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'var(--background)' }}
    />
  )
} 