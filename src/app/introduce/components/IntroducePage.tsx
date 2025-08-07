"use client";

import { DarkModeProvider } from "@/common/DarkModeProvider";
import { useDarkMode } from "@/hooks/useDarkMode";
import IntroduceContainer from "../IntroduceContainer";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Intro from "./Intro";
import Project from "./Project";
import Stack from "./Stack";

const Introduce = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <main>
        <Intro />
        <Experience />
        <Project />
        <Stack />
        <About />
        <Contact />
      </main>

      {/* Scroll to top button - Fixed position */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-colors z-50 shadow-lg ${
          isDarkMode
            ? "bg-gray-800 hover:bg-gray-700 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-black"
        }`}
      >
        <span className="text-lg">↑</span>
      </button>
    </div>
  );
};

const IntroducePage = () => {
  return (
    <DarkModeProvider>
      <IntroduceContainer.Provider>
        <Introduce />
      </IntroduceContainer.Provider>
    </DarkModeProvider>
  );
};

export default IntroducePage;
