import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 px-6 py-3 flex justify-between items-center">
      <div className="font-bold text-xl">Kalenor</div>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-indigo-500 transition">Home</a>
        <a href="#about" className="hover:text-indigo-500 transition">About</a>
        <a href="#skills" className="hover:text-indigo-500 transition">Skills</a>
        <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
        <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
      </div>
    </nav>
  );
}
