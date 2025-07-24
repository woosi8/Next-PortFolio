"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/hooks/useDarkMode";

const Header = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
      isDarkMode ? 'bg-black/90' : 'bg-white/90'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className={`text-xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>CHOI HYUCK</div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#experience"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </a>
            <a
              href="#project"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("project")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Project
            </a>
            <a
              href="#skill"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skill")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skill
            </a>
            <a
              href="#award"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("award")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Award
            </a>
            <a
              href="#certificate"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("certificate")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Certificate
            </a>
            <a
              href="#contact"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              🌐
            </button>
            <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              📱
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
