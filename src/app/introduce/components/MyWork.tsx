"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MyWork = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const awards = [
    {
      year: "2023년",
      title: "가우디오랩 - PIETTIC 중 Integrity 수상",
      description: "L 신뢰 높은 협업, 높은 수준의 업무처리로 인한 수상 🏆",
      icon: "🏆",
    },
    {
      year: "2021년",
      title: "티맥스 표창장 - 우수사원상",
      description: "L 티맥스사내의 좋좋은, 출가 플랫폼 관련 업적성 인한 수상",
      icon: "🏆",
    },
    {
      year: "2019년",
      title: "우리온라인 온택트 콘텐츠 - 우수상",
      description:
        "L IDR 좋바의 크롤링의 오점 + 서울 이용한 챗덱의 프로젝트로 성장, 추천 서비스",
      icon: "🏆",
    },
    {
      year: "2019년",
      title:
        "원보 스타트업 어업스, 강기노 대학생 좋은 창업서비회 콘텐츠, 출석(팀워크여성 창업경진대회,스마트시티 창선 지 + 다양, 응도솀, 다항, 취약수각 외",
      description: "L (기하 좋아 모빙이의 좋흔",
      icon: "🏆",
    },
    {
      year: "2018년",
      title: "한국출산학회 학술좋정에기출처 - 우수논문",
      description:
        "L [UC-LAB] GAN로긴 DNN로을 활용한 ANOMALY DETECTION에 관한 연구 🏆",
      icon: "🏆",
    },
  ];

  return (
    <section id="MyWork" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">AWARD</h2>
          <p
            className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            담핑고 있던 서비스를 킴득하거 히력, 주안한 부딪 영어외 좋촉고 있젓릅
            셔롭특별 다나띄니다.
          </p>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-6">
                <div
                  className={`font-medium min-w-0 flex-shrink-0 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {award.year}
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{award.icon}</div>
                    <div>
                      <h3
                        className={`font-medium mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {award.title}
                      </h3>
                      <p
                        className={`text-sm ${
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

export default MyWork;
