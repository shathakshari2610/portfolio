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
        background:
          "linear-gradient(135deg, #000000, #1a1a2e, #2b0b3f, #000000)",
      }}
    >
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="/assets/Experience.gif"
          alt="Experience animation"
          className="w-72 h-72 object-contain rounded-3xl shadow-[0_0_20px_rgba(255,192,203,0.4)]"
        />
      </div>

      {/* Right Experience Cards */}
      <div className="w-full md:w-2/3 space-y-10">
        <h3 className="text-4xl md:text-5xl font-bold text-pink-400 mb-8 text-center md:text-left drop-shadow-[0_0_10px_rgba(255,192,203,0.6)]">
          Experience
        </h3>
        {experience.map((e) => (
          <div
            key={e.company}
            className="bg-black/70 border border-pink-400/30 rounded-3xl p-6 shadow-xl transition transform hover:scale-105 duration-300 backdrop-blur-lg"
          >
            <div className="flex items-center gap-4">
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
