'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const mousePosition = useRef({ x: 0, y: 0 })

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
      width: number
      baseX: number
      baseY: number
    }> = []

    // Criar mais linhas com diferentes tamanhos
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      lines.push({
        x,
        y,
        baseX: x,
        baseY: y,
        length: Math.random() * 200 + 50,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        opacity: Math.random() * 0.15 + 0.1, // Aumentada a opacidade
        width: Math.random() * 0.8 + 0.3 // Linhas mais grossas
      })
    }

    // Adicionar linhas mais longas
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      lines.push({
        x,
        y,
        baseX: x,
        baseY: y,
        length: Math.random() * 300 + 200,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.0005,
        opacity: Math.random() * 0.1 + 0.05, // Aumentada a opacidade
        width: Math.random() * 0.5 + 0.2
      })
    }

    function drawLine(x: number, y: number, length: number, angle: number, opacity: number, width: number) {
      if (!ctx) return
      
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(length, 0)
      
      const color = isDark ? '255, 255, 255' : '0, 0, 0'
      ctx.strokeStyle = `rgba(${color}, ${opacity})`
      ctx.lineWidth = width
      ctx.stroke()
      ctx.restore()
    }

    function getDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach(line => {
        // Movimento base
        line.x += Math.cos(line.angle) * (0.2 + Math.random() * 0.2)
        line.y += Math.sin(line.angle) * (0.2 + Math.random() * 0.2)
        line.angle += line.rotationSpeed

        // Interação com o mouse
        const distance = getDistance(mousePosition.current.x, mousePosition.current.y, line.x, line.y)
        const repelRadius = 100 // Raio de repulsão
        
        if (distance < repelRadius) {
          const angle = Math.atan2(line.y - mousePosition.current.y, line.x - mousePosition.current.x)
          const force = (repelRadius - distance) / repelRadius // Força mais forte quando mais próximo
          
          line.x += Math.cos(angle) * force * 5
          line.y += Math.sin(angle) * force * 5
        } else {
          // Retornar suavemente à posição base quando longe do mouse
          line.x += (line.baseX - line.x) * 0.02
          line.y += (line.baseY - line.y) * 0.02
        }

        // Reposicionar quando sair da tela
        if (line.x > canvas.width + 200) {
          line.x = -200
          line.baseX = line.x
        }
        if (line.x < -200) {
          line.x = canvas.width + 200
          line.baseX = line.x
        }
        if (line.y > canvas.height + 200) {
          line.y = -200
          line.baseY = line.y
        }
        if (line.y < -200) {
          line.y = canvas.height + 200
          line.baseY = line.y
        }

        drawLine(line.x, line.y, line.length, line.angle, line.opacity, line.width)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Atualizar posição do mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'var(--background)' }}
    />
  )
} 