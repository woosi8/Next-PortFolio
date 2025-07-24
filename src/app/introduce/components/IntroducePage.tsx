"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Award from "./Award";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Intro from "./Intro";
import Project from "./Project";
import Skill from "./Skill";

const IntroducePage = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-lg">로딩중...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <main>
        <Intro />
        <Experience />
        <Project />
        <Skill />
        <Award />
        <Certificate />
        <Contact />
      </main>
      
      {/* Scroll to top button - Fixed position */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-50 shadow-lg"
      >
        <span className="text-white text-lg">↑</span>
      </button>
    </div>
  );
};

export default IntroducePage;
