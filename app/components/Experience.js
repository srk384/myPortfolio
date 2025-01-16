"use client";
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './Section-heading';
import experiencesData from '@/lib/data';


const Experience = () => {
    return (
        <section id="experience"
            className="scroll-mt-28 mb-28">
            <SectionHeading>Education and Experience</SectionHeading>
            <VerticalTimeline lineColor="#f3f4f6">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{background: "#f3f4f6", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", border: "1px solid rgba(0, 0, 0, 0.05)", textAlign: "left", padding: "1.3rem 2rem"}}
                            contentArrowStyle={{borderRight: "0.4rem solid #9ca3af"}}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{background: "white", fontSize: "1.5rem", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", border: "3px solid rgba(0, 0, 0, 0.02)"}}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.name}</p>
                            <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default Experience

