"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Stack = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const skillCategories = [
    {
      title: "Framework & Architecture (5년 차)",
      description:
        "Next.js 15 App Router와 React 18 기반 실무형 FSD(Feature-Sliced Design) 5-Layer 변형 구조(view / container / components / types / constants)를 구축하고 단방향 의존성과 단일 책임 원칙을 준수합니다.",
      skills: [
        { name: "Next.js", icon: "/icons/Next.js.svg" },
        { name: "React", icon: "/icons/React.svg" },
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "JavaScript", icon: "/icons/JavaScript.svg" },
        { name: "GitHub", icon: "/icons/GitHub.svg" },
      ],
    },
    {
      title: "POS System & Hardware Control Engine",
      description:
        "SSE(Server-Sent Events) 단방향 스트리밍 기반 실시간 주문 수신 알림 파이프라인 구축, Zustand + BroadcastChannel 듀얼 고객 디스플레이 0.1초 미만 동기화 아키텍처, @dnd-kit 적용 POS 단축키 키패드 커스텀 배치 시스템, 영수증 템플릿 실시간 DOM 미리보기 & @media print 감열지 픽셀 동기화 엔진 개발",
      skills: [
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "React", icon: "/icons/React.svg" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
      ],
    },
    {
      title: "Type Safety & State Management",
      description:
        "tRPC와 Zod Schema를 활용해 백엔드부터 프론트엔드까지 100% E2E Type Safety를 확보(Zero any, Zero Magic String)하고, Zustand(전역 세션) + unstated-next(피처 컨테이너) 2-Layer 상태 관리 및 useOverlay 선언적 모달 정책을 운용합니다.",
      skills: [
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "React", icon: "/icons/React.svg" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
      ],
    },
    {
      title: "Performance & UI System",
      description:
        "@tanstack/react-virtual DOM 가상화로 60fps 스크롤 성능 달성, xlsx-js-style 수만 건 엑셀 가공/내보내기 모듈 개발, Tailwind CSS + Radix UI Primitives + CVA 조합의 헤드리스 UI 디자인 시스템 모듈화",
      skills: [
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
        { name: "Sass", icon: "/icons/Sass.svg" },
        { name: "CSS3", icon: "/icons/CSS3.svg" },
      ],
    },
    {
      title: "Cloud & Backend Engineering",
      description:
        "AWS Amplify / Route 53 호스팅 및 CDN/도메인 분리 배포 관리를 담당하고, NestJS + TypeORM 환경에서 DB 데이터 모델 접근 및 CRUD API 설계/개발 참여로 풀스택 협업 역량을 확장하고 있습니다.",
      skills: [
        { name: "AWS", icon: "/icons/AWS.svg" },
        { name: "Nest.js", icon: "/icons/Nest.js.svg" },
      ],
    },
  ];

  return (
    <section id="stack" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">STACK</h2>
          <p
            className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            5년 차 프론트엔드 개발자로서 지속 가능한 코어 아키텍처(FSD 변형 레이어) 설계부터 End-to-End 타입 안전성(tRPC+Zod), 2-Layer 상태 관리(Zustand+unstated-next Container), 대용량 DOM 가상화 및 백엔드 API(NestJS) 개발 참여까지 엔터프라이즈 프로덕트의 전반적인 기술 역량을 갖추고 있습니다.
          </p>

          <div className="space-y-2">
            {skillCategories.map((category, index) => {
              const isExpanded = expandedCategories.includes(index);
              return (
                <div
                  key={index}
                  className={`border border-gray-600 rounded-lg transition-all duration-300`}
                >
                  {/* 카테고리 헤더 - 클릭 가능 */}
                  <div
                    className="p-4 cursor-pointer flex items-center justify-between hover:opacity-80 transition-opacity"
                    onClick={() => toggleCategory(index)}
                  >
                    <div className="flex items-center">
                      {/* 첫 번째 스킬 아이콘들을 헤더에 표시 */}
                      <div className="flex items-center mr-4">
                        {category.skills.slice(0, 3).map((skill, i) => (
                          <img
                            key={i}
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 mr-2"
                          />
                        ))}
                        {category.skills.length > 3 && (
                          <span
                            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            +{category.skills.length - 3}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : "rotate-0"
                      } ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      ▼
                    </div>
                  </div>

                  {/* 확장된 콘텐츠 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4">
                      <p
                        className={`text-sm mb-4 ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {category.description}
                      </p>

                      {/* 모든 스킬 아이콘들 */}
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 p-2 rounded-lg ${
                              isDarkMode ? "bg-gray-700" : "bg-gray-100"
                            }`}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-6 h-6"
                            />
                            <span
                              className={`text-sm font-medium ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
