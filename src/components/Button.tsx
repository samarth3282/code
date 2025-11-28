import React, { useRef, useState } from 'react'

type ButtonProps = {
  content: React.ReactNode
  className?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  notHoverBackgroundColor?: string
  hoverTextColor?: string
  padding?: string
  onClick?: () => void
}

const Button = ({
  content,
  className = '',
  backgroundColor = '#8b7355',
  textColor = '#fff',
  borderColor = '#8b7355',
  notHoverBackgroundColor = '#000',
  hoverTextColor = '#fff',
  padding = '12px 24px',
  onClick
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [rippleStyle, setRippleStyle] = useState<React.CSSProperties>({})
  const [isHovering, setIsHovering] = useState(false)

  const calculateRippleSize = (x: number, y: number, rect: DOMRect) => {
    return Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    ) * 2
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size = calculateRippleSize(x, y, rect)
    
    setRippleStyle({
      left: x,
      top: y,
      width: size,
      height: size,
    })
    setIsHovering(true)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size = calculateRippleSize(x, y, rect)
    
    // Update ripple position to exit point before hiding
    setRippleStyle({
      left: x,
      top: y,
      width: size,
      height: size,
    })
    setIsHovering(false)
  }

  return (
    <button 
      ref={buttonRef}
      className={`button button--hyperion ${isHovering ? 'is-hovering' : ''} ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
        padding,
        fontWeight: className.includes('font-bold') ? 'bold' : 'normal',
        ['--hover-bg' as any]: notHoverBackgroundColor,
        ['--hover-text' as any]: hoverTextColor,
        ['--ripple-left' as any]: `${rippleStyle.left}px`,
        ['--ripple-top' as any]: `${rippleStyle.top}px`,
        ['--ripple-size' as any]: `${rippleStyle.width}px`,
      }}
    >
      <span className="ripple-bg"></span>
      <span><span>{content}</span></span>
    </button>
  )
}

export default Button