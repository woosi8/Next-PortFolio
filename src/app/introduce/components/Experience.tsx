"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "heypay",
      companyInfo: "엔터프라이즈 B2B SaaS CRM/POS 웹 시스템",
      period: "2024.07 - 재직중",
      roles: [
        { name: "프론트엔드 아키텍트", color: "bg-purple-600" },
        { name: "프론트엔드 리드", color: "bg-green-600" },
      ],
      description: [
        "🎯 프론트엔드 리드로서 기획 의도 파악부터 프로젝트 전체 아키텍처 구조 설계 및 핵심 비즈니스 로직 설계 총괄",
        "🎯 FSD(Feature-Sliced Design) 변형 폴더 구조 구축 (view / container / components / types / constants)",
        "🎯 POS 멀티 디바이스 환경 설정 아키텍처: Zustand 스토어와 BroadcastChannel을 연결하여 POS 동작 모드, 결제 단말기 파라미터, 듀얼 고객 전면 디스플레이 연동 상태 0.1초 미만 실시간 동기화",
        "🎯 POS 판매 실제 단말기 연동 - 결제,취소,영수증,텍스프리 등 실제 포스 기능 구현",
        "🎯 실시간 주문 수신 및 매장 알림 처리를 위한 SSE(Server-Sent Events) 단방향 스트리밍 파이프라인 구축",
        "🎯 POS 영수증 템플릿 커스텀 엔진 개발 (로고/사업자/바코드/QR 매핑 실시간 DOM 미리보기 & @media print 감열지 프린터 픽셀 비율 동기화)",
        "🎯 tRPC + Zod 기반 백엔드-프론트엔드 100% E2E Type Safety 구현 (Zero any, Zero Magic String)",
        "🎯 @tanstack/react-virtual 기반 DOM 가상화(60fps) 및 수만 건 엑셀 스트리밍 가공 모듈 개발",
      ],
    },
    {
      company: "레티튜",
      companyInfo: "글로벌 진학 로드맵 플랫폼 서비스",
      period: "2024.07 - 재직중",
      roles: [
        { name: "프론트엔드 개발자", color: "bg-blue-600" },
        { name: "프론트엔드 리드", color: "bg-green-600" },
      ],
      description: [
        "🎯 글로벌 B2B 더 폰드 프론트앤드 재구축",
        "🎯 프로젝트 프론트 구축부터 배포까지 담당 (AWS Amplify)",
        "🎯 모바일 반응형 프로젝트 PWA 배포 담당",
      ],
    },
    {
      company: "로스닥",
      companyInfo: "법률 서비스 플랫폼",
      period: "2022.06 - 2024.04",
      roles: [
        { name: "프론트엔드 개발자", color: "bg-blue-600" },
        { name: "프론트엔드 리드", color: "bg-green-600" },
      ],
      description: [
        "🎯 의뢰인 페이지, 변호사 페이지, 어드민 페이지 구축 FE 담당",
        "🎯 프로젝트 라이브 서버를 배포 및 운영",
        "🎯 프로젝트의 계획 및 실행을 지원함",
        "🎯 프로젝트 문서 및 보고서 문서화",
      ],
      links: [{ icon: "📄", url: "https://www.lawsdaq.com" }],
    },
    {
      company: "씨피에스",
      companyInfo: "용접 AI 솔루션 서비스",
      period: "2021.06 - 2021.12",
      roles: [{ name: "프론트엔드 개발자", color: "bg-blue-600" }],
      description: [
        "🎯 프로토 타입 퍼블리싱 작업",
        "🎯 전체 프로젝트에 공통적으로 쓸 수 있는 컴포넌트 구성 (Material Design)",
        "🎯 API통신 연동으로 화면 조작 가능한 페이지 구성",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">EXPERIENCE</h2>
          <p className="text-gray-400 mb-8">
            편리하고 가치있는 서비스를 개발하고, 체계적인 서비스를 만들고
            있습니다.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="lg:w-1/4 mb-4 lg:mb-0">
                    <h3 className="font-bold text-white text-lg mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {exp.companyInfo}
                    </p>
                    <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.roles.map((role, roleIndex) => (
                        <span
                          key={roleIndex}
                          className={`${role.color} text-xs px-2 py-1 rounded text-white`}
                        >
                          {role.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-gray-300 text-sm">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/12 text-right">
                    <div className="flex gap-2">
                      {exp.links
                        ? exp.links.map((link, linkIndex) =>
                            link.url ? (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
                              >
                                {link.icon}
                              </a>
                            ) : (
                              <span
                                key={linkIndex}
                                className="text-gray-500 cursor-not-allowed"
                              >
                                {link.icon}
                              </span>
                            ),
                          )
                        : null}
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
