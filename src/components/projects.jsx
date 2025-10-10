import React from "react";

const projects = [
  {
    title: "Library Management System",
    tools: "Python (Flask), SQLite",
    description:
      "Developed a web-based system to manage library operations such as adding and viewing members and books.",
  },
  {
    title: "Stock Price Prediction",
    tools: "Python, Machine Learning, Generative AI",
    description:
      "Built a stock price prediction model using Generative AI and ML algorithms during the GenAI Workshop.",
  },
  {
    title:
      "StudyMate: An AI-Powered PDF-Based Q&A System for Students",
    tools: "AI, NLP, Python, Flask",
    description:
      "Created an AI-driven platform that extracts and answers questions from academic PDFs. Built during Cognitive X Hackathon.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center text-white p-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #000000, #0f0f1f, #1a1a2e, #000000)",
      }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 text-center">
        Projects
      </h2>

      {/* Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-black/80 border-2 border-purple-900 rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-800/40 hover:border-purple-700 cursor-pointer"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-purple-500 group-hover:text-purple-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 italic mb-4">
                  Tools: {project.tools}
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              {/* Animated border glow */}
              <div className="mt-6 h-[2px] bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Floating Glow Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/10 to-black opacity-40 pointer-events-none animate-pulse"></div>
    </section>
  );
}
