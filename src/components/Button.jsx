import React from 'react'

// Use React.forwardRef to allow parent to pass a ref
const Button = React.forwardRef(({ text, className, id }, ref) => {
  return (
    <a 
      ref={ref} // ✅ attach ref here
      href="" 
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('services');
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        
        <div className="arrow-wrapper right-3 sm:right-4 md:right-10">
            <img src="/images/down-arrow-13.svg" alt="arrow"  />
        </div>
      </div>
    </a>
  )
})

export default Button;
