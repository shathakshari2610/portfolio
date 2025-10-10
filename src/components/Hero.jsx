import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <header
      className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-screen text-center md:text-left text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #0d0221, #000000 90%)",
      }}
    >
      {/* Background GIF */}
      <img
        src="/assets/Jobsearch.gif"
        alt="Background animation"
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
      />

      {/* Floating Glow Orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-700/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Hero Content */}
      <motion.div
        className="z-10 max-w-xl p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Profile Picture */}
        <motion.img
          src="/assets/profile.jpg"
          alt="Profile"
          className="w-48 h-48 mx-auto md:mx-0 rounded-full border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] object-cover transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(216,180,254,0.8)]"
          whileHover={{ rotate: 5 }}
        />

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-wide drop-shadow-[0_0_10px_rgba(180,100,255,0.6)]">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            SHATHAKSHARI KALENOR
          </span>
        </h1>

        {/* Typewriter Role */}
        <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
          <Typewriter
            options={{
              strings: ["DATA ANALYST 💻", "DATA VISUALIZATION 🎨", "POWER BI 🚀"],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </h2>

        {/* Divider */}
        <div className="mt-6 w-32 h-[2px] mx-auto md:mx-0 bg-gradient-to-r from-purple-400 via-pink-400 to-transparent"></div>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          Passionate about transforming raw data into powerful insights. I craft interactive dashboards and stories that make numbers speak. 📊
        </p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-700 to-fuchsia-600 rounded-full text-white font-semibold tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(216,180,254,0.8)] transition-all duration-300"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Lottie Animation using public URL */}
      <motion.div
        className="z-10 w-80 md:w-[28rem]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Lottie
          path="/assets/hero-animation.json" // Access via public URL (Vite compatible)
          loop
          autoplay
          style={{ filter: "drop-shadow(0 0 20px #b794f4)" }}
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
    </header>
  );
}
