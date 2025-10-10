import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between gap-10 p-10 min-h-screen rounded-2xl text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, #0d0d0d, #000000 90%)",
      }}
    >
      {/* Galaxy Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-10 left-20 animate-pulse"></div>
        <div className="absolute w-[3px] h-[3px] bg-white rounded-full top-1/3 left-1/2 animate-ping"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-20 right-32 animate-pulse"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-1/4 left-1/3 animate-ping"></div>
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-700/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Left: Text Section */}
      <motion.div
        className="md:w-1/2 space-y-5 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 hover:text-purple-400 transition-colors duration-300">
          I am a passionate <strong>B.Tech Computer Science Engineering (Data Science)</strong> student with a strong interest in <strong>data analytics</strong> and <strong>business intelligence</strong>. I enjoy transforming raw data into meaningful insights that drive informed decision-making.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 hover:text-purple-400 transition-colors duration-300">
          With hands-on experience in tools such as <strong>Python</strong>, <strong>Tableau</strong>, <strong>Power BI</strong>, and <strong>Excel</strong>, I specialize in analyzing datasets, creating interactive dashboards, and visualizing patterns that reveal hidden trends.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 hover:text-purple-400 transition-colors duration-300">
          My goal is to grow as a <strong>Data Analyst</strong>, leveraging analytical thinking and visualization techniques to help organizations make data-driven strategies. I am continuously learning and exploring innovative ways to turn data into impactful stories.
        </p>
      </motion.div>

      {/* Right: GIF Animation */}
      <motion.div
        className="md:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.07, rotate: 1 }}
      >
        <img
          src="/assets/JobSearch.gif"
          alt="Data Analytics GIF"
          className="w-80 md:w-96 rounded-xl shadow-2xl border border-purple-700 transition-transform duration-500"
        />
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href="#experience"
          className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors"
        >
          <span className="text-sm mb-1 tracking-wider">Scroll Down</span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-3xl"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
