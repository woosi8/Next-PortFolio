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
      title: "4 Experienced years",
      description:
        "JS, TS의 트렌드를 따라가며 프론트엔드 개발자의 기본기와 생각하고 꿈꿔하고 있습니다.",
      skills: [
        { name: "JavaScript", icon: "/icons/JavaScript.svg" },
        { name: "TypeScript", icon: "/icons/TypeScript.svg" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
        { name: "Sass", icon: "/icons/Sass.svg" },
        { name: "CSS3", icon: "/icons/CSS3.svg" },
      ],
    },
    {
      title: "3 Experienced years",
      description: "React와 Next.js를 활용한 모던 웹 애플리케이션 개발",
      skills: [
        { name: "Next.js", icon: "/icons/Next.js.svg" },
        { name: "React", icon: "/icons/React.svg" },
        { name: "GitHub", icon: "/icons/GitHub.svg" },
      ],
    },
    {
      title: "1 Experienced years",
      description:
        "AWS Amplify를 통해 AWS CLoudFront CDN에 Next.js 프론트 웹사이트를 배포 운영,국제/국내 버전 분리를 통해 버전 관리에 따른 도메인 분리에 대한 기술 경험",
      skills: [{ name: "AWS", icon: "/icons/AWS.svg" }],
    },
    {
      title: "1 Experienced year",
      description:
        "NestJS 기반의 API를 직접 설계하고 구현, 기본적인 엔드포인트 외에도 TypeORM을 활용해 테이블 간 관계 설정 및 조인 쿼리 작성 등을 수행하며 프론트엔드 요구사항에 맞는 응답 구조를 구성",
      skills: [{ name: "Nest.js", icon: "/icons/Nest.js.svg" }],
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
            4년차 프론트앤드 개발자로서 코드 설계 및 구조, 구현하고자 하는
            페이지, 기능들은 문제없이 구현할 수 있는 단계 까지 성장했다고
            판단하여 최근에는 백엔드 개발에 더욱 집중하고 학습하여 풀스텍
            개발자로 성장하고자 합니다. 현재 회사 프로젝트에서 Nest.js 기반의
            백엔드 API 설계 및 개발 업무에 직접 참여하며 백엔드 개발 역량을
            확장해 나가고 있습니다.{" "}
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
