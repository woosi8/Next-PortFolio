"use client";

import Header from "@/app/introduce/components/Header";
import { DarkModeProvider } from "@/common/DarkModeProvider";
import { useDarkMode } from "@/hooks/useDarkMode";
import InterviewContainer from "../InterviewContainer";
import InterviewSections from "./InterviewSections";

const Interview = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <main>
        {/* Interview 페이지 헤더 섹션 */}
        <section className="pt-20 pb-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Interview</h1>
            <p
              className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              면접 준비를 위한 핵심 포인트들
            </p>
          </div>
        </section>

        {/* Interview 섹션들 */}
        <InterviewSections />
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

const InterviewPage = () => {
  return (
    <DarkModeProvider>
      <InterviewContainer.Provider>
        <Interview />
      </InterviewContainer.Provider>
    </DarkModeProvider>
  );
};

export default InterviewPage;
