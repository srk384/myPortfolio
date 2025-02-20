"use client"
import React from 'react'
import SectionHeading from './Section-heading'

const Projects = () => {
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
    return (
        <section id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>Projects</SectionHeading>

            <div onClick={() =>alert("This project is currently under development.")} className='p-1 sm:p-0 flex flex-col bg-gray-100 max-w-[45rem] sm:max-h-[25rem] mb-4 sm:mb-14 rounded-lg relative border shadow-lg overflow-hidden hover:bg-gray-200 group my-5'>

                <img src="/feedbackai.jpg" alt="" width={350} className='sm:absolute shadow-lg border rounded-lg sm:rounded-r-lg left-0 bottom-1/2 transition sm:translate-y-1/2 sm:group-hover:scale-[1.05] sm:group-hover:-rotate-2' />

                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem] space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold">FeedbackAI <br/>(In Development)</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:text-base">Feedback AI is an AI-powered platform designed to analyze and interpret feedback, providing actionable insights for businesses and teams. It leverages advanced sentiment analysis and data-driven reporting to enhance decision-making, optimize user experiences, and drive continuous improvement.</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">React.js</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Tailwind</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Node.js</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">MongoDB</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Mongoose</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Gemini API</li>
                    </ul>
                </div>

            </div>
            <div onClick={() => handleClick("https://getchai.netlify.app/")} className='p-1 sm:p-0 hover:cursor-pointer flex flex-col bg-gray-100 max-w-[45rem] sm:max-h-[25rem] mb-4 sm:mb-14 rounded-lg relative border shadow-lg overflow-hidden hover:bg-gray-200 group my-5'>

                <img src="/getmeachai.jpg" alt="" width={350} className='sm:absolute shadow-lg border rounded-lg sm:rounded-l-lg right-0 bottom-1/2 transition sm:translate-y-1/2 sm:group-hover:scale-[1.05] sm:group-hover:-rotate-2' />

                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem] space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold">GetMeAChai</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:text-base">GetMeAChai is a crowdfunding platform designed to support creators by enabling them to receive contributions from their audience. It features secure login authentication, payment integration, and a simple, user-friendly interface.</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Next.js</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">MongoDB</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">mongoose</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Tailwind</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">NextAuth</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Razorpay</li>
                    </ul>
                </div>

            </div>
            <div onClick={() => handleClick("https://weatherly-black.vercel.app")} className='p-1 sm:p-0 hover:cursor-pointer flex flex-col bg-gray-100 max-w-[45rem] sm:max-h-[25rem] mb-4 sm:mb-14 rounded-lg relative border shadow-lg overflow-hidden hover:bg-gray-200 group my-5'>

                <img src="/weatherly.jpg" alt="" width={350} className='sm:absolute shadow-lg border rounded-lg sm:rounded-r-lg left-0 bottom-1/2 transition sm:translate-y-1/2 sm:group-hover:scale-[1.05] sm:group-hover:-rotate-2' />

                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem] space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold">Weatherly</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:text-base">A fully functional Weather App that delivers real-time weather updates, including hourly and 5-day forecasts, for searched cities or your current location, using a weather API for accurate data.</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">HTML</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Tailwind</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">JavaScript</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Open Weather API</li>
                    </ul>
                </div>

            </div>
            <div onClick={() => handleClick("https://github.com/srk384/SpotifyClone")} className='p-1 sm:p-0 hover:cursor-pointer flex flex-col bg-gray-100 max-w-[45rem] sm:max-h-[25rem] rounded-lg relative border shadow-lg overflow-hidden hover:bg-gray-200 group my-5'>

                <img src="/spotify.jpg" alt="" width={350} className='sm:absolute shadow-lg border rounded-lg sm:rounded-r-lg right-0 bottom-1/2 transition sm:translate-y-1/2 sm:group-hover:scale-[1.05] sm:group-hover:-rotate-2' />

                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem] space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold">Spotify Clone</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:text-base">A Spotify Clone featuring preloaded playlists and a fully functional music player bar. Users can play, pause, skip tracks, or go back to previous ones for a seamless listening experience. The app also includes a responsive design, ensuring usability across all devices.</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">HTML</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">CSS</li>
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">JavaScript</li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-lg sm:text-xl font-semibold mt-14'>Discover additional creations beyond these three on My <a href='https://github.com/srk384' target='blank'><span className='text-green-800 underline'>GitHub!</span></a></div>
        </section>
    )
}

export default Projects