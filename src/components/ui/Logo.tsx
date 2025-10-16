import React from 'react'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'light' | 'dark'
  showText?: boolean
  className?: string
}

export default function Logo({ 
  size = 'medium', 
  variant = 'dark',
  showText = true,
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12', 
    large: 'w-16 h-16'
  }

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  }

  const iconColor = variant === 'light' ? 'text-white' : 'text-crimson-600'
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900'

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Icon - Modern geometric design representing digital connectivity */}
      <div className={`${sizeClasses[size]} ${iconColor} flex-shrink-0`}>
        <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full">
          {/* Outer ring representing community */}
          <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          
          {/* Central hub */}
          <circle cx="24" cy="24" r="6" fill="currentColor"/>
          
          {/* Connection nodes */}
          <circle cx="24" cy="8" r="3" fill="currentColor"/>
          <circle cx="39" cy="24" r="3" fill="currentColor"/>
          <circle cx="24" cy="40" r="3" fill="currentColor"/>
          <circle cx="9" cy="24" r="3" fill="currentColor"/>
          
          {/* Connection lines */}
          <line x1="24" y1="18" x2="24" y2="11" stroke="currentColor" strokeWidth="2"/>
          <line x1="30" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="2"/>
          <line x1="24" y1="30" x2="24" y2="37" stroke="currentColor" strokeWidth="2"/>
          <line x1="18" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="2"/>
          
          {/* Diagonal connections for network effect */}
          <line x1="18" y1="18" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="30" y1="18" x2="35" y2="13" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="30" y1="30" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="18" y1="30" x2="13" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Text - Just "Desi Digital Hub" without tagline */}
      {showText && (
        <div className={`${textColor} font-bold ${textSizeClasses[size]} tracking-tight`}>
          <span className="text-crimson-600">Desi</span>
          <span className="text-gray-700 ml-1">Digital</span>
          <span className="text-himalayan-600 ml-1">Hub</span>
        </div>
      )}
    </div>
  )
}
