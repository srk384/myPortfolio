import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experienceData = [
  {
    title: "Fullstack Developer",
    name: "Freelancer",
    description: "React, NextJs, MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Sr. Business Development Associate",
    name: "Scaler Academy",
    description: "Data Structures, Algorithms, SQL, Low-Level Design (LLD), problem-solving skills and algorithmic complexities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Business Development Associate",
    name: "Lido Learning",
    description: "Coding bootcamps for K12 segment.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Reservations Associate",
    name: "Praxis Services ltd. Gurgaon",
    description: "Reservations for Taj group of hotels (PAN India)",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Hotel Management",
    name: "IHM Lucknow",
    description: "B.Sc in Hospitality and Hotel Administration",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
]

export const projectsData = [
  {
    title: "FeedbackAI",
    about: "Feedback AI is an AI-powered platform designed to analyze and interpret feedback, providing actionable insights for businesses and teams. It leverages advanced sentiment analysis and data-driven reporting to enhance decision-making, optimize user experiences, and drive continuous improvement.",
    stacks: ["React.js", "Tailwind", "Node.js", "MongoDB", "Mongoose", "Gemini API"],
    image: "./feedbackai.jpg",
    link: "",
    isCompletd: false
  },
  {
    title: "GetMeAChai",
    about: "GetMeAChai is a crowdfunding platform designed to support creators by enabling them to receive contributions from their audience. It features secure login authentication, payment integration, and a simple, user-friendly interface.",
    stacks: ["Next.js", "MongoDB", "Mongoose", "Tailwind", "NextAuth", "Razorpay"],
    image: "./getmeachai.jpg",
    link: "https://getchai.netlify.app",
    isCompletd: true
  },
  {
    title: "Weatherly",
    about: "A fully functional Weather App that delivers real-time weather updates, including hourly and 5-day forecasts, for searched cities or your current location, using a weather API for accurate data.",
    stacks: ["HTML", "Tailwind", "JavaScript", "Open Weather API"],
    image: "./weatherly.jpg",
    link: "https://weatherly-black.vercel.app",
    isCompletd: true
  },
  {
    title: "Spotify Clone",
    about: "A Spotify Clone featuring preloaded playlists and a fully functional music player bar. Users can play, pause, skip tracks, or go back to previous ones for a seamless listening experience. The app also includes a responsive design, ensuring usability across all devices.",
    stacks: ["HTML", "CSS", "JavaScript",],
    image: "./spotify.jpg",
    link: "https://github.com/srk384/SpotifyClone",
    isCompletd: true
  },
]

