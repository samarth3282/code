import React from 'react'

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
  backgroundColor = '#000',
  textColor = '#fff',
  borderColor = '#000',
  notHoverBackgroundColor = '#8b7355',
  hoverTextColor = '#fff',
  padding = '12px 24px',
  onClick
}: ButtonProps) => {
  return (
    <button 
      className={`button button--hyperion ${className}`}
      onClick={onClick}
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
        padding,
        fontWeight: className.includes('font-bold') ? 'bold' : 'normal',
        ['--hover-bg' as any]: notHoverBackgroundColor,
        ['--hover-text' as any]: hoverTextColor
      }}
    >
      <span><span>{content}</span></span>
    </button>
  )
}

export default Button