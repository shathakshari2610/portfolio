import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      level: "B.Tech in Data Science",
      institution: "Tkr College of Engineering and Technology,Hyderabad",
      cgpa: "8.30/10",
      year: "2022 - 2026",
    },
    {
      level: "Intermediate (MPC)",
      institution: "SR JR College, Nizamabad",
      cgpa: "9.1/10",
      year: "2020 - 2022",
    },
    {
      level: "10th",
      institution: "Sri Vijaya Sai High School, Bodhan",
      cgpa: "10/10",
      year: "2019 - 2020",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen p-10 bg-gradient-to-b from-black via-[#1a001a] to-[#330033] text-white"
    >
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-pink-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Education
        </motion.h2>
        <p className="text-gray-400 mt-2">Knowledge • Growth • Achievements</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[#120012]/70 rounded-3xl p-5 hover:scale-[1.05] transform transition-all duration-300 shadow-[0_0_15px_#ff99cc]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-pink-300 mb-1">{edu.level}</h3>
            <p className="text-gray-300 mb-1">{edu.institution}</p>
            <p className="text-sm text-gray-400 italic mb-1">CGPA : {edu.cgpa}</p>
            <p className="text-sm text-gray-400 italic">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
