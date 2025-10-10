import React from "react";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-white p-10 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000, #0f0f1f, #1a1a2e, #000000)",
      }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-10 text-center">
        Contact
      </h2>

      {/* Contact Info */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10 bg-black/80 border-2 border-black rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        {/* Left: Info Links */}
        <div className="space-y-5 text-center md:text-left">
          <p className="text-lg text-gray-300">
            Let's connect! Feel free to reach out for collaborations, projects,
            or just to say hi 👋
          </p>

          <div className="flex flex-col space-y-3 mt-4">
            <a
              href="kalenorshathakshari@gmail.com"
              className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-500 transition"
            >
              <Mail size={20} /> kalenorshathakshari@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/shathakshari-kalenor-07846b334/"
              target="_blank"
              className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-500 transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>

            <a
              href="https://github.com/shathakshari2610"
              target="_blank"
              className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-500 transition"
            >
              <Github size={20} /> GitHub
            </a>

            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-500 transition"
            >
              <Globe size={20} /> Portfolio
            </a>
          </div>
        </div>

        {/* Right: Optional Contact Form */}
        <form className="w-full md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-700 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-700 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional: Thank You Message */}
      <p className="mt-10 text-gray-400 text-center text-sm">
        💫 Thank you for visiting my portfolio!
      </p>
    </section>
  );
}

