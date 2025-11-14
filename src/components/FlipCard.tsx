import React from 'react'

type CardProps = {
  front: React.ReactNode
  back: React.ReactNode
  width?: string
  height?: string
  frontBg?: string
  backBg?: string
  frontBorder?: string
  backBorder?: string
  borderRadius?: string
  className?: string
}

const Card = ({
  front,
  back,
  width = '200px',
  height = '250px',
  frontBg = 'white',
  backBg = '#8b5cf6',
  frontBorder = '1px solid #e5e7eb',
  backBorder = 'none',
  borderRadius = '0.5rem',
  className = ''
}: CardProps) => {
  return (
    <div 
      className={`card ${className}`}
      style={{
        width,
        height
      }}
    >
      <div className='card-inner'>
        <div 
          className='card-front'
          style={{
            background: frontBg,
            border: frontBorder,
            borderRadius
          }}
        >
          {front}
        </div>
        <div 
          className='card-back'
          style={{
            background: backBg,
            border: backBorder,
            borderRadius
          }}
        >
          {back}
        </div>
      </div>
    </div>
  )
}

export default Card