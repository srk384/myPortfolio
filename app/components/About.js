import React from 'react'
import SectionHeading from './Section-heading'


const About = () => {
    return (
        <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                A <span className="font-medium">proactive self-taught programmer</span> with expertise in the <span className="font-medium">MERN stack</span> and <span className="font-medium">Next.js</span>, I bring a unique perspective from my non-technical background and experience in diverse fields. My journey reflects <span className="font-medium">ownership</span>, a commitment to <span className="font-medium">skill-driven growth</span>, and the ability to adapt and thrive in any environment. By combining <span className="font-medium">diverse perspectives</span> with technical expertise, I create efficient, user-focused solutions and continuously strive to improve. Let's work together to bring innovative ideas to life!
            </p>
            <p>
                <span className="font-medium">Beyond coding</span>, I find joy in playing{' '}
                <span className="font-medium">cricket</span>, staying <span className="font-medium">fit</span>, <span className="font-medium">traveling</span>, indulging in <span className="font-medium">video games</span> and being a <span className="font-medium">bike enthusiast</span>. My appetite for
                knowledge extends to{" "}
                <span className="font-medium">entrepreneurship</span>, a realm I am currently exploring.
            </p>
        </section>
    )
}

export default About