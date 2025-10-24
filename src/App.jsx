import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App(){
  return (
    <div>
      <Hero />
      <main className="p-6 max-w-6xl mx-auto space-y-24">
        <About />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
