import React from 'react'
import { navLinks } from '../constants'
import { useEffect, useState } from 'react'


const Navbar = () => {

    // State to track whether the user has scrolled down
    const [scrolled, setScrolled] = useState(false);

    // Runs once when the component loads
    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {  // Increased threshold
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    // Call it once on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (

    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div className="inner">
            {/* Logo that scrolls back to the hero section */}
            <a href="#home">
                <img src="public\images\royale_computers_logo.png" alt="Royale Computers Logo" className='logo-img' />
            </a>

            {/* Desktop Navigation */}
            <nav className="desktop">

                <ul>
                    {/* Generate nav links from navLinks array */}
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>

            {/* Contact button */}
            <a href="#contact" className='contact-btn group'>
                <div className="inner">
                    <span>Contact</span>
                </div>
            </a>

        </div>
    </header>
  )
}

export default Navbar