import React from "react";

const experience = [
  {
    company: "Future Interns",
    role: "Intern",
    date: "08/2025 - 09/2025",
    bullets: [
      "Sales & Marketing Dashboard (Task 1): Built KPI-based dashboards using filters and drilldowns.",
      "Social Media Campaign Analysis (Task 2): Analyzed campaign effectiveness through Power BI visuals.",
      "Customer Segmentation (Task 3): Designed dashboards for demographic-based targeting.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center p-10 text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000, #0f0f1f, #1a1a2e, #000000)",
      }}
    >
      {/* Left GIF */}
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="/assets/Experience.gif"
          alt="Experience animation"
          className="w-72 h-72 object-contain"
        />
      </div>

      {/* Right Experience Cards */}
      <div className="w-full md:w-2/3 space-y-8">
        <h3 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8 text-center md:text-left">
          Experience
        </h3>
        {experience.map((e) => (
          <div
            key={e.company}
            className="bg-black/90 border-2 border-black rounded-2xl p-6 shadow-2xl transition transform hover:scale-105 duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-semibold text-white">
                  {e.role} — {e.company}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{e.date}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc list-inside text-gray-300 text-base space-y-2">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

