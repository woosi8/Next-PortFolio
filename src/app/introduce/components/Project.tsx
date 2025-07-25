"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import LawsDaqModal from "./LawsDaqModal";
import LetituModal from "./LetituModal";

const Project = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const [isLetituModalOpen, setIsLetituModalOpen] = useState(false);
  const [isLawsDaqModalOpen, setIsLawsDaqModalOpen] = useState(false);
  const projects = [
    {
      name: "LETITU",
      description: "글로벌 진학 로드맵 플랫폼 서비스",
      techStack: [
        { name: "React", icon: "/icons/React.svg" },
        { name: "ReactQuery", icon: "/icons/React.svg" },
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "Next.js", icon: "/icons/Next.js.svg" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
        { name: "AWS", icon: "/icons/AWS.svg" },
        { name: "NEST", icon: "/icons/Nest.js.svg" },
      ],
      modalType: "letitu",
    },
    {
      name: "LAWSDAQ",
      description: "법률 플랫폼 서비스",
      techStack: [
        { name: "React", icon: "/icons/React.svg" },
        { name: "ReactQuery", icon: "/icons/React.svg" },
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "Sass", icon: "/icons/Sass.svg" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
        { name: "GitHub", icon: "/icons/GitHub.svg" },
      ],
      modalType: "lawsdaq",
    },
    {
      name: "리액트 포트폴리오 프로젝트",
      description:
        "Material Design을 이용한 Front End 포트폴리오(2021.10.01~2022.01.07)",
      techStack: [
        { name: "React", icon: "/icons/React.svg" },
        { name: "Material", icon: "/icons/MaterialUI.svg" },
        { name: "PostCSS", icon: "/icons/PostCSS.svg" },
      ],
      link: "https://woosi8.github.io/Portfolio_React_Page",
    },
    {
      name: "자바스크립트 포트폴리오 프로젝트",
      description:
        "Javascript를 이용한 Front End 프로젝트(2020.01.01~2021.03.12)",
      techStack: [
        { name: "JavaScript", icon: "/icons/JavaScript.svg" },
        { name: "CSS", icon: "/icons/CSS3.svg" },
      ],
      link: "https://woosi8.github.io/Frontend_Web_Developer",
    },

    {
      name: "캐릭터쇼 (사이드 프로젝트)",
      description: "자바스크립트를 이용한 애니메이션 프로젝트",
      techStack: [
        { name: "JavaScript", icon: "/icons/JavaScript.svg" },
        { name: "CSS", icon: "/icons/CSS3.svg" },
      ],
      link: "https://woosi8.github.io/js_compilation/Character%20Show/index.html",
    },
    {
      name: "당근게임 (사이드 프로젝트)",
      description:
        "자바스크립트를 이용한 게임 프로젝트 - 당근과 버그를 랜덤으로 생성하여 주어진 시간안에 랜덤으로 지정된 숫자만큼 당근을 클릭하여 없애야지 이기는 게임.",
      techStack: [
        { name: "JavaScript", icon: "/icons/JavaScript.svg" },
        { name: "CSS", icon: "/icons/CSS3.svg" },
      ],
      link: "https://woosi8.github.io/carrot",
    },
  ];

  return (
    <section id="project" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">PROJECT</h2>
          <p
            className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            레거시 코드들을 마이그레이션 및 신기술를 통해 프로젝트를
            만들어왔습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className={`border-b ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
                >
                  <th
                    className={`text-left py-4 px-4 font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    프로젝트
                  </th>
                  <th
                    className={`text-left py-4 px-4 font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    소개/사용기술
                  </th>
                  <th
                    className={`text-left py-4 px-4 font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    상세보기
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className={`border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
                  >
                    <td className="py-6 px-4 whitespace-nowrap">
                      <h3
                        className={` font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        {project.name}
                      </h3>
                    </td>
                    <td className="py-6 px-4 w-170">
                      <p
                        className={`text-sm mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-5 h-5"
                            />
                            <span className="text-xs text-gray-400">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 cursor-pointer text-lg hover:text-blue-300 transition-colors mr-2"
                        >
                          📄
                        </a>
                      )}
                      {project.modalType && (
                        <span
                          onClick={() => {
                            if (project.modalType === "letitu") {
                              setIsLetituModalOpen(true);
                            } else if (project.modalType === "lawsdaq") {
                              setIsLawsDaqModalOpen(true);
                            }
                          }}
                          className="text-blue-400 cursor-pointer text-lg hover:text-blue-300 transition-colors"
                        >
                          ℹ️
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p
              className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
            >
              아직 못시의 프로젝트 목록 개인 개인만뜩을 초 규지개내용
              출처하습니다.
            </p>
          </div>
        </div>
      </div>

      <LetituModal
        isOpen={isLetituModalOpen}
        onClose={() => setIsLetituModalOpen(false)}
      />
      <LawsDaqModal
        isOpen={isLawsDaqModalOpen}
        onClose={() => setIsLawsDaqModalOpen(false)}
      />
    </section>
  );
};

export default Project;
