import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python",
    "Power BI",
    "Tableau",
    "Excel",
    "Data Analytics",
    "Machine Learning (Basics)",
    "SQL",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 py-16"
    >
      {/* Left: Skills content */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-purple-400">Skills</h2>

        <ul className="space-y-4 text-lg">
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-purple-900/20 border border-purple-400/30 rounded-xl px-6 py-3 shadow-md hover:bg-purple-800/30 transition"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right: GIF animation */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/assets/AnalyticsCharacterAnimation.gif"
          alt="Analytics Animation"
          className="w-96 h-96 object-contain rounded-2xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
