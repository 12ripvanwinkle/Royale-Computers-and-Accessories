// import React from 'react'
// import { Main_navLinks } from '../constants'
// import { useEffect, useState } from 'react'


// const Navbar = () => {

//     // State to track whether the user has scrolled down
//     const [scrolled, setScrolled] = useState(false);

//     // Runs once when the component loads
//     useEffect(() => {
//     const handleScroll = () => {
//         if (window.scrollY > 50) {  // Increased threshold
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     }

//     // Call it once on mount to set initial state
//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// }, []);

//   return (

//     <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
//         <div className="inner">
//             {/* Logo that scrolls back to the hero section */}
//             <a href="#home">
//                 <img src="public\images\royale_computers_logo.png" alt="Royale Computers Logo" className='logo-img' />
//             </a>

//             {/* Desktop Navigation */}
//             <nav className="desktop">

//                 <ul>
//                     {/* Generate nav links from Main_navLinks array */}
//                     {Main_navLinks.map(({link, name}) => (
//                         <li key={name} className='group'>
//                             <a href={link}>
//                                 <span>{name}</span>
//                                 <span className="underline" />
//                             </a>
//                         </li>
//                     ))}
//                 </ul>

//             </nav>

//             {/* Contact button */}
//             <a href="#contact" className='contact-btn group'>
//                 <div className="inner">
//                     <span>Contact</span>
//                 </div>
//             </a>

//         </div>
//     </header>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Main_navLinks, techSolutionsNavlinks, techServicesNavlinks, } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine which set of nav links to show based on current route
  const isTechSolutionsPage = location.pathname === '/tech-solutions';
  const isTechServicesPage = location.pathname === '/tech-services';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Choose which links to display
  // Choose which links to display based on current page
  const navLinks = isTechSolutionsPage ? techSolutionsNavlinks 
    : isTechServicesPage ? techServicesNavlinks 
    : Main_navLinks;

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            {/* Logo - always goes to home */}
            <Link to="/">
                <img src="/images/royale_computers_logo.png" alt="Royale Computers Logo" className='logo-img' />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            {/* If link starts with /, it's a route - use Link. Otherwise it's a hash - use anchor */}
                            {link.startsWith('/') && link !== '/' ? (
                                <Link to={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </Link>
                            ) : link === '/' ? (
                                <Link to="/">
                                    <span>{name}</span>
                                    <span className="underline" />
                                </Link>
                            ) : (
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            )}
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