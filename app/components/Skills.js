'use client'
import React from 'react'
import SectionHeading from './Section-heading'
import { motion } from 'framer-motion'

const Skills = () => {
    const cardVariants = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,  
                damping: 12,     
                delay: index * 0.1, 
            },
        }),
    };

    const skills = [
        { name: "HTML", shadow: "shadow-red-400" },
        { name: "CSS", shadow: "shadow-blue-400" },
        { name: "JavaScript", shadow: "shadow-yellow-400" },
        { name: "React", shadow: "shadow-cyan-400" },
        { name: "Tailwind", shadow: "shadow-indigo-400" },
        { name: "Bootstrap", shadow: "shadow-purple-400" },
        { name: "Node.Js", shadow: "shadow-green-400" },
        { name: "Express", shadow: "shadow-gray-500" },
        { name: "MongoDB", shadow: "shadow-green-700" },
        { name: "Postman", shadow: "shadow-orange-500" },
        { name: "Vercel", shadow: "shadow-black" },
        { name: "VSCode", shadow: "shadow-blue-500" },
        { name: "NextJs", shadow: "shadow-gray-800" },
        { name: "GitHub", shadow: "shadow-gray-900" },
    ];

    return (
        <section id="skills" className="scroll-mt-28 mb-28 max-w-[40rem] text-center sm:mb-40">
            <SectionHeading>Languages and Tools</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skills.map(({ name, shadow }, index) => (
                    <motion.li
                        key={index}
                        className={`bg-white border rounded-xl p-3 flex flex-col justify-center items-center gap-2 text-sm font-semibold shadow-lg hover:bg-gray-100 transition ${shadow}`}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        custom={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.1,
                            transition: { type: "tween", duration: 0.1, ease: "easeInOut" } 
                        }}
                    >
                        <img src={`${name}.svg`} alt={name} />
                        {name}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;
