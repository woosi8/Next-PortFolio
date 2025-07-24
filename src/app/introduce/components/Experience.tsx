"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDarkMode } from "@/hooks/useDarkMode";

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "가우디오랩",
      period: "2022.07 - 2025.07",
      role: "프론트엔드 개발자 | 프론트엔드 리드",
      description: [
        "🎯 AI 모델링 활용한 협업 개발",
        "🎯 오디오 데이터 ETL을 위한 내부 툴 개발", 
        "🎯 유저에게 편리한 오디오 결정할 수 있는 서비스"
      ],
      link: "📄"
    },
    {
      company: "티맥스티베로",
      period: "2020.02 - 2022.06",
      role: "연구원",
      description: [
        "🎯 분석 주식 서비스를 위한 차트 설정 및 React 구현, 웹서 시나리오 추천 시스템 개발",
        "🎯 hypywidget를 활용한 No-code 솔게 응원 툴 개발",
        "🎯 기존 포트폴리오 React SPA로의 전환",
        "🎯 데이터 시각화를 위한 대시보드, 차트 기능 구현"
      ],
      link: "-"
    },
    {
      company: "카첩",
      period: "2018.12 - 2020.02", 
      role: "대표공동 | CTO | 백엔드",
      description: [
        "🎯 모빌리티 서비스를 위한 인프라이드 아웃리치 지식, 개발",
        "🎯 서비스 동영 상영 및 전체 인영 조종",
      ],
      link: "📄"
    }
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
          } ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">EXPERIENCE</h2>
          <p className="text-gray-400 mb-8">
            편리하고 가치있는 서비스를 개발하고, 체계적인 서비스를 만들고 있습니다.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="lg:w-1/4 mb-4 lg:mb-0">
                    <h3 className="font-bold text-white text-lg mb-2">{exp.company}</h3>
                    <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                    <div className="flex gap-2">
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">프론트엔드 개발자</span>
                      <span className="bg-green-600 text-xs px-2 py-1 rounded">프론트엔드 리드</span>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-gray-300 text-sm">{desc}</p>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/12 text-right">
                    <div className="flex gap-2">
                      <span className="text-blue-400 cursor-pointer">📄</span>
                      <span className="text-blue-400 cursor-pointer">📄</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;