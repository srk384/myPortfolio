"use client"
import React from 'react'
import Link from 'next/link'
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
    const activeSection = useActiveSection(["home", "about", "projects", "skills", "experience", "contact"]);

    return (
        <div>
            <nav className='fixed sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 backdrop-blur-sm bg-white/80 shadow-lg sm:rounded-full z-50'>
                <ul className='flex sm:gap-2 gap-[2px] justify-center sm:p-2  py-1 font-medium flex-wrap sm:flex-nowrap text-sm sm:text-base'>
                    
                    <Link href="#home"><li className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black  ${
                activeSection === "home" ? "text-black font-semibold bg-gray-100" : "text-gray-700"
              }`}>Home</li></Link>

                    <Link href="#about"><li className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black  ${
                activeSection === "about" ? "text-black font-semibold bg-gray-100" : "text-gray-700"
              }`}>About</li></Link>

                    <Link href="#projects"><li className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black  ${
                activeSection === "projects" ? "text-black font-semibold bg-gray-100" : "text-gray-700"
              }`}>Projects</li></Link>

                    <Link href="#skills"><li className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black  ${
                activeSection === "skills" ? "text-black font-semibold bg-gray-100" : "text-gray-700"
              }`}>Skills</li></Link>

                    <Link href="#experience"><li className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black  ${
                activeSection === "experience" ? "text-black font-semibold bg-gray-100" : "text-gray-700"
              }`}>Experience</li></Link>

                    <Link href="#contact"><li className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black  ${
                activeSection === "contact" ? "text-black font-semibold bg-gray-100" : "text-gray-700"
              }`}>Contact</li></Link>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
    