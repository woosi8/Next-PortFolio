"use client";

import {
  interviewSectionsData,
  type InterviewSection,
} from "@/common/mockData";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const InterviewSections = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const interviewSections: InterviewSection[] =
    interviewSectionsData.interviewSections;

  return (
    <section className="py-16 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-4 lg:p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            INTERVIEW PREPARATION
          </h2>
          <p
            className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            면접 준비를 위한 주요 항목들을 정리했습니다. 각 섹션을 클릭하여 상세
            내용을 확인하세요.
          </p>

          <div className="space-y-2">
            {interviewSections.map((section, index) => {
              const isExpanded = expandedSections.includes(index);
              return (
                <div
                  key={section.id}
                  className={`border border-gray-600 rounded-lg transition-all duration-300`}
                >
                  {/* 섹션 헤더 - 클릭 가능 */}
                  <div
                    className="p-4 cursor-pointer flex items-center justify-between hover:opacity-80 transition-opacity"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        <span className="text-2xl mr-3">{section.icon}</span>
                        <div>
                          <h3
                            className={`font-medium text-lg ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {section.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {section.description}
                          </p>
                        </div>
                      </div>
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
                    className={`overflow-y-auto transition-all duration-300 ${
                      isExpanded
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`px-4 pb-4 border-t ${
                        isDarkMode ? "border-gray-700" : "border-gray-300"
                      }`}
                    >
                      <div className="pt-4">
                        <div
                          className={`p-4 rounded-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-50"
                          }`}
                        >
                          <div
                            className={`whitespace-pre-line text-sm leading-relaxed ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {section.content}
                          </div>
                        </div>
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

export default InterviewSections;
