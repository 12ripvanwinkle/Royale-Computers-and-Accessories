import React from 'react'
import { socialMedia } from '../../constants'


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-center">
                <a href="/">Legal Documents go Here (privacy policy/terms of use etc)</a>
            </div>

            <div className="socials">
                {socialMedia.map((img) => (
                    <a href={img.url} className='icon' target='_blank' key={img.url}>
                        <img src={img.imgPath} alt={img.alt} />
                    </a>
                ))}
            </div>

            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    &copy; {new Date().getFullYear()} Royale Computers and Accessories. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer