"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDarkMode } from "@/hooks/useDarkMode";

const Project = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      name: "오디오 플랫폼",
      description: "오디오 플랫폼을 통한 디지털 오디오 콘텐츠 제공 서비스",
      techStack: ["⚛️", "📱", "☁️", "🔧", "💾"],
      link: "📄"
    },
    {
      name: "비 솔루션",
      description: "디지털 계좌만을 제공하는 전자도서관 분석자 시스템 서비스 창나 빅데이터 플랫폼",
      techStack: ["⚛️", "📱", "🔧", "☁️", "🔍", "📊"],
      link: "📄"
    },
    {
      name: "여의도 시날을물미(ERP+CRM)",
      description: "MS의 Access를 관리한 기존 시스템미디그라마 프로젝트",
      techStack: ["⚛️", "📱", "☁️", "🔧", "💾", "📊", "🎯"],
      link: "📄"
    },
    {
      name: "광고 제곡 플랫폼",
      description: "광고 제곡 서비스릃 창영의 플랫폼",
      techStack: ["⚛️", "📱", "☁️", "🔧", "💾", "📊"],
      link: "📄"
    },
    {
      name: "금강 포트폴리오 플랫폼",
      description: "금강공해 음향 서시를 이용한 최고의 포트폴리오 성장, 추천 서비스",
      techStack: ["⚛️", "📱", "🔧", "☁️", "📊", "🎯"],
      link: "📄"
    }
  ];

  return (
    <section id="project" className="py-16 px-6">
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
          <h2 className="text-2xl font-bold mb-6 text-blue-400">PROJECT</h2>
          <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            신기술 + 좋은 경기술을 통해 프로젝트를 만들어왔습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <th className={`text-left py-4 px-4 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>프로젝트</th>
                  <th className={`text-left py-4 px-4 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>소개/사용기술</th>
                  <th className={`text-left py-4 px-4 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>상세보기</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <td className="py-6 px-4">
                      <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                    </td>
                    <td className="py-6 px-4">
                      <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                      <div className="flex gap-2">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="text-lg">{tech}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-blue-400 cursor-pointer text-lg">{project.link}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              아직 못시의 프로젝트 목록 개인 개인만뜩을 초 규지개내용 출처하습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;