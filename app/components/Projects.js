"use client"
import React from 'react'
import { motion } from 'motion/react'


const Projects = ({ title, about, stacks, image, link, isCompletd }) => {

    function openInNewTab(url) {
        if (!url) {
            console.error("URL is required");
            return;
        }

        window.open(url, "_blank");
    }

    const handleClick = (url) => {
        openInNewTab(url);
    }

    const cardVariants = {
        offscreen: {
            y: 200,
            scale: 0.5
        },
        onscreen: {
            y: 50,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <motion.div onClick={() => handleClick(`${link}`)} className='relative p-1 sm:p-0 hover:cursor-pointer  bg-gray-100 max-w-[45rem] sm:max-h-[25rem] mb-4 sm:mb-14 rounded-lg  border shadow-lg overflow-hidden hover:bg-gray-200 group my-5 '
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
        >
            <img src={image} alt="" width={350} className='sm:absolute mx-auto mt-2 shadow-lg border rounded-lg sm:rounded-r-lg  bottom-1/2 transition sm:translate-y-1/2 sm:group-hover:scale-[1.05] sm:group-hover:-rotate-2 sm:group-even:ml-[23rem]' />
            <div className="p-4 px-5 sm:pl-8 sm:pr-2 sm:pt-5 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[22rem] space-y-4 ">

                <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">{title} {!isCompletd && <span className='text-sm text-gray-600'>(In Development)</span>}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:text-base">{about}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {stacks.map((stack, index) => <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{stack}</li>
                    )}
                </ul>
            </div>
        </motion.div>
    )
}

export default Projects

