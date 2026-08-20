"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import HeypayModal from "./HeypayModal";
import LawsDaqModal from "./LawsDaqModal";
import LetituModal from "./LetituModal";
import { ProjectItem } from "@/types/project.type";
import ReservationModal from "./ReservationModal";

const Project = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const [isHeypayModalOpen, setIsHeypayModalOpen] = useState(false);
  const [isLetituModalOpen, setIsLetituModalOpen] = useState(false);
  const [isLawsDaqModalOpen, setIsLawsDaqModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const projects: ProjectItem[] = [
    {
      name: "Heypay (B2B SaaS CRM/POS)",
      description:
        "엔터프라이즈 B2B SaaS CRM/POS 웹 시스템 (FSD 변형 아키텍처, tRPC E2E Type Safety, SSE 주문 실시간 스트리밍, BroadcastChannel 듀얼 디스플레이 동기화, 웹 pos 서비스 기능 구현)",
      techStack: [
        { name: "Next.js 15", icon: "/icons/Next.js.svg" },
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "tRPC / Zod", icon: "/icons/React.svg" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
        { name: "AWS", icon: "/icons/AWS.svg" },
      ],
      modalType: "heypay",
    },
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
      id: "reservation",
      name: "풀스택 예약 관리 플랫폼 (사이드 프로젝트)",
      title: "풀스택 예약 관리 플랫폼 (사이드 프로젝트)",
      subtitle:
        "Next.js 15+ App Router & Supabase PostgreSQL 기반의 실시간 일정/예약 관리 시스템",
      period: "2026.08 - 진행 중",
      category: "Full Stack / Web Application",
      description:
        "Next.js 15+ App Router & Supabase PostgreSQL 기반의 실시간 일정/예약 관리 시스템 (사용자 권한별 캘린더 뷰, 실시간 시간 슬롯 이중 선점 방지, OAuth 2.0 및 Supabase 연동)",
      summary:
        "사용자 권한(ADMIN / USER)별 캘린더 뷰 분기, 실시간 시간 슬롯 이중 선점 방지, Kakao/Google OAuth 2.0 소셜 로그인 및 Supabase PostgreSQL 데이터베이스 직접 연동을 지원하는 풀스택 예약 플랫폼입니다.",
      link: "https://next-reservation-project-49mo.vercel.app",
      demoUrl: "https://next-reservation-project-49mo.vercel.app",
      modalType: "reservation",
      techStack: [
        { name: "Next.js 15+", icon: "/icons/Next.js.svg" },
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "Supabase", icon: "/icons/React.svg" },
        { name: "Zustand", icon: "/icons/React.svg" },
        { name: "TanStack Query v5", icon: "/icons/React.svg" },
        { name: "Tailwind CSS v4", icon: "/icons/Tailwind CSS.svg" },
        { name: "JWT & OAuth 2.0", icon: "/icons/React.svg" },
        { name: "FSD Architecture" },
        { name: "Vitest" },
        { name: "Playwright" },
      ],
      testAccounts: [
        {
          role: "👑 관리자 (ADMIN)",
          id: "testadmin1",
          pw: "T@estadmin1",
          description:
            "전체 회원 예약 현황 조회, 승인/거절/삭제 및 관리자 일정 직접 등록",
        },
        {
          role: "👤 일반회원 (USER)",
          id: "testuser1",
          pw: "T@estuser1",
          description:
            "원하는 시간 슬롯 예약 신청, 본인 예약 상세 조회 및 취소",
        },
      ],
      keyFeatures: [
        "FSD(Feature-Sliced Design) 레이어 아키텍처 기반의 확장 가능한 모듈화 구조 설계",
        "Supabase PostgreSQL members 테이블의 role_type(ROLE_ADMIN, ROLE_USER)과 실시간 권한 및 세션 동기화",
        "시간 슬롯별 이중 예약 선점 방지 커스텀 훅(useOccupiedSlots)을 통한 데이터 무결성 보장",
        "초기 렌더링 및 달 이동 시 이전 데이터 잔상 없이 깔끔하게 동작하는 오버레이 로딩 스피너(CalendarLoadingSpinner)",
        "HttpOnly Cookie 기반 JWT 인증 보안 및 카카오/구글 OAuth 2.0 소셜 회원가입/로그인 연동",
        "모달 바깥 배경(Backdrop) 영역 클릭 시 자연스럽게 닫히는 반응형 UX 제공",
      ],
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
                        {project.name || project.title}
                      </h3>
                    </td>
                    <td className="py-6 px-4 w-170">
                      <p
                        className={`text-sm mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {project.description ||
                          project.subtitle ||
                          project.summary}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.techStack.map((tech, i) => {
                          const isString = typeof tech === "string";
                          const name = isString ? tech : tech.name;
                          const icon = isString ? undefined : tech.icon;

                          return (
                            <div key={i} className="flex items-center gap-1">
                              {icon && (
                                <img
                                  src={icon}
                                  alt={name}
                                  className="w-5 h-5"
                                />
                              )}
                              <span className="text-xs text-gray-400">
                                {name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      {(project.link || project.demoUrl) && (
                        <a
                          href={project.link || project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 cursor-pointer text-lg hover:text-blue-300 transition-colors mr-2"
                          title="웹사이트 / 데모"
                        >
                          🔗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 cursor-pointer text-lg hover:text-white transition-colors mr-2"
                          title="GitHub"
                        >
                          <img
                            src="/icons/GitHub.svg"
                            alt="GitHub"
                            className="w-5 h-5 inline-block"
                          />
                        </a>
                      )}
                      {project.modalType && (
                        <span
                          onClick={() => {
                            if (project.modalType === "heypay") {
                              setIsHeypayModalOpen(true);
                            } else if (project.modalType === "letitu") {
                              setIsLetituModalOpen(true);
                            } else if (project.modalType === "lawsdaq") {
                              setIsLawsDaqModalOpen(true);
                            } else if (project.modalType === "reservation") {
                              setIsReservationModalOpen(true);
                            }
                          }}
                          className="text-blue-400 cursor-pointer text-lg hover:text-blue-300 transition-colors"
                        >
                          📄
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
              이전 회사의 프로젝트 중 공개할 수 있는 프로젝트만 공유합니다.
            </p>
          </div>
        </div>
      </div>

      <HeypayModal
        isOpen={isHeypayModalOpen}
        onClose={() => setIsHeypayModalOpen(false)}
      />
      <LetituModal
        isOpen={isLetituModalOpen}
        onClose={() => setIsLetituModalOpen(false)}
      />
      <LawsDaqModal
        isOpen={isLawsDaqModalOpen}
        onClose={() => setIsLawsDaqModalOpen(false)}
      />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </section>
  );
};

export default Project;
