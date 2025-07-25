"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const awards = [
    {
      year: "2017 ~ 2019",
      title: "2년간의 해외 생활",
      description: `K-move 스쿨 프로그램을 통해 베트남 현지 여행사에서 약 2년간 근무하며 해외 생활을 경험했습니다. 
      이 과정에서 글로벌 환경에서 통용될 수 있는 전문 기술의 필요성을 깨달았고, 어디서든 활용될 수 있는 개발자라는 직업에 관심을 갖게 되었습니다.
개발 학습을 시작한 지 1년간은 온라인 강의와 독학을 통해 기초를 다졌습니다. 초기에는 퍼블리싱에 집중하여 HTML, CSS를 중점적으로 학습했으나,
점차 동적인 기능 구현에 대한 흥미가 생겨 프론트엔드 개발자를 목표로 준비해 왔습니다.
이후 CS 기초 지식, JavaScript, React 등을 체계적으로 학습하며 프론트엔드 개발 역량을 쌓아왔습니다.
`,
    },
    {
      year: "2017",
      title: "경기대 관광경영 학과 학사 졸업",
      description: "L 티맥스사내의 좋좋은, 출가 플랫폼 관련 업적성 인한 수상",
    },
  ];

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            개발 이외 경력
          </h2>
          <p
            className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            해외 생활을 경험하면서 다양한 시각과 사고력을 넓힌 사람이
            되었습니다.
          </p>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-6">
                <div
                  className={`font-medium min-w-25 flex-shrink-0 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {award.year}
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3
                        className={`font-medium mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {award.title}
                      </h3>
                      <p
                        className={`text-sm whitespace-pre-line ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {award.description}
                      </p>
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

export default About;
