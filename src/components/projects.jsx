import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Library Management System",
      description:
        "Developed a web-based system to manage library operations (Add/View Members & Books).",
      tools: "Python (Flask), SQLite",
      github: "https://github.com/shathakshari2610/my-library",
    },
    {
      title: "Stock Price Prediction",
      description:
        "Built a stock price prediction model using Generative AI and ML algorithms.",
      tools: "Python, ML, EVENT:GenAI",
      github: "https://github.com/shathakshari2610/StockPricePrediction",
    },
    {
      title: "StudyMate: AI PDF Q&A",
      description:
        "AI-powered platform that extracts knowledge from PDFs for students.",
      tools: "Python, NLP, Hackathon: Cognitive X",
      github: "https://github.com/shathakshari2610/StudyMate_HackOps",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-[#1a001a] to-[#330033] p-10 text-white"
    >
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-[#E1BEE7]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ My Projects ✨
        </motion.h2>
        <p className="text-gray-400 mt-2">Creative • Analytical • Smart</p>
      </div>

      {/* Pinterest-style Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#120012]/70 rounded-3xl p-5 hover:scale-[1.03] transform transition-all duration-300 shadow-[0_0_15px_#8A2BE2]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#D8B4FE] mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm text-gray-400 italic mb-2">{project.tools}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-full shadow hover:shadow-lg transition duration-300"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
