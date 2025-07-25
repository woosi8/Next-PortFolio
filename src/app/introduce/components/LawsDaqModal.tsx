"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

interface LawsDaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectItem {
  title: string;
  description?: string | string[];
}

const LawsDaqModal = ({ isOpen, onClose }: LawsDaqModalProps) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  const techStack = [
    "React",
    "React-Query",
    "Typescript",
    "Redux",
    "Styled-components",
    "Tailwind",
    "SCSS",
    "WebSocket",
  ];

  const mainProjects: ProjectItem[] = [
    {
      title: "React-Query 도입 → 명확한 타입과 캐시 구현",
      description:
        "라이브러리 사용을 지양해서 순수 기능으로 개발도중 프로젝트 규모가 커짐에따라 관리에 시간을 단축하기 위해서 리액트 쿼리 도입 ( 리패치, 로딩, 캐싱 관리를 위해",
    },
    {
      title:
        "React-Query 도입으로 API 상태 관리 표준화 및 명확한 타입 기반 캐시 전략 구현 → 중복 코드 감소, 유지보수성 및 UX 향상",
    },
    {
      title: "tailwind 도입, 디자인시스템 컴포넌트 구축 → 생산성 증가",
    },
    {
      title: "소셜 회원가입 기능 도입 (카카오톡,네이버)",
      description: "JWT",
    },
    {
      title: "다날 결제 시스템을 위한 설정부터 결제 완료 까지 개발",
    },
    {
      title: "입력 폼 글자수 제한 에러 표시 > 공용 컴포넌트 개발",
    },
    {
      title: "실제 점수표, 목표 점수표에 대한 등급별로 비율 반영된 그래프 개발",
    },
    {
      title: "로그인 유저 정보 및 상태를 전역 관리 하기 위해 리덕스 도입",
    },
    {
      title: "Admin 페이지에서 SEO 분석을 위한 GA 코드 연동",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`max-w-4xl w-full rounded-lg p-6 max-h-[80vh] overflow-y-auto ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1
              className={`text-2xl font-bold mb-1 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              LAWSDAQ
            </h1>
            <p
              className={`mb-1 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Front-end Developer
            </p>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              2022.06 ~ 2024.04
            </p>
          </div>
          <button
            onClick={onClose}
            className={`text-2xl transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽 - 사용 기술 */}
          <div className="lg:col-span-1">
            <h3
              className={`font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              사용 기술
            </h3>
            <ul className="space-y-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className={`flex items-center ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 - 주요 프로젝트 */}
          <div className="lg:col-span-2">
            <h3
              className={`font-semibold mb-3 pb-2 border-b ${
                isDarkMode
                  ? "text-white border-gray-600"
                  : "text-black border-gray-300"
              }`}
            >
              주요 프로젝트
            </h3>
            <div className="space-y-4">
              {mainProjects.map((project, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h4
                    className={`font-medium mb-1 leading-tight ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h4>
                  {project.description && (
                    <div
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {Array.isArray(project.description) ? (
                        project.description.map((desc, i) => (
                          <p key={i} className="mb-1">
                            • {desc.replace(/^-\s*/, "")}
                          </p>
                        ))
                      ) : (
                        <p>{project.description}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawsDaqModal;
