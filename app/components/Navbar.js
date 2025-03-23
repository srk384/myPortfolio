"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = () => {
    const sections = ["home", "about", "projects", "skills", "experience", "contact"];
    const activeSection = useActiveSection(sections);
    
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); // Hide navbar when scrolling down
            } else {
                setVisible(true); // Show navbar when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            <nav
                className={`fixed sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 backdrop-blur-sm bg-white/80 shadow-lg sm:rounded-full z-50 transition-transform duration-300 ${
                    visible ? "translate-y-0" : "-translate-y-20"
                }`}
            >
                <ul className="flex sm:gap-2 gap-[2px] justify-center sm:p-2 py-1 font-medium flex-wrap sm:flex-nowrap text-sm sm:text-base">
                    {sections.map((section) => (
                        <Link key={section} href={`#${section}`}>
                            <li
                                className={`nav-link transition hover:bg-gray-100 px-4 py-2 rounded-full hover:text-black ${
                                    activeSection === section
                                        ? "text-black font-semibold bg-gray-100"
                                        : "text-gray-700"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;