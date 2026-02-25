import React from 'react'

const Button = React.forwardRef(({ text, className, onClick }, ref) => {
  return (
    <button 
      ref={ref}
      onClick={onClick}
      className={`${className ?? ''} group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-medium text-sm md:text-base overflow-hidden transition-[border-color] duration-300 hover:border-orange-100 backdrop-blur-sm bg-white/5`}
    >
      {/* Orange fill that scales from left */}
      <span className="absolute inset-0 bg-orange-100 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      
      {/* Text on top */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-xl">{text}</span>
      
      {/* Arrow icon */}
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
    </button>
  )
})

Button.displayName = 'Button'

export default Button