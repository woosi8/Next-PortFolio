"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const Header = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">CHOI HYUCK</div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#experience"
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
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
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
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
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
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
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
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
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
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
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
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
            <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              🌙
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
