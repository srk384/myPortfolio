import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

 const experiencesData = [
    {
      title: "Bachelor In Commerce",
      name: "University Of Mumbai",
      description: "B.Com graduate, 2020",
      icon: React.createElement(LuGraduationCap),
      date: "2020",
    },
    {
      title: "Software Engineering",
      name: "Scaler",
      description:"Data Structures, Algorithms, SQL, and Low-Level Design (LLD), honing problem-solving skills and fostering a deep understanding of algorithmic complexities.",
      icon: React.createElement(LuGraduationCap),
      date: "2022",
    },
    {
      title: "Software Engineer",
      name: "Myzow Solutions LLP",
      description:"Full-stack developer using React, Java, Spring Boot, and MySQL.",
      icon: React.createElement(CgWorkAlt),
      date: "2022 - 2024",
    },
    {
      title: "Teaching Assistant",
      name: "Scaler",
      description: "Assisting students by answering queries and solving coding problems.",
      icon: React.createElement(CgWorkAlt),
      date: "2024 - Present",
    },
  ] 

  export default experiencesData;
  