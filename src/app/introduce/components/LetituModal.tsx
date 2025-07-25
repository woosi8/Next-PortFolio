"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

interface LetituModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectItem {
  title: string;
  description?: string | string[];
}

const LetituModal = ({ isOpen, onClose }: LetituModalProps) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "React-Query",
    "WebSocket",
    "Orval",
    "Tailwind",
    "Zustand",
    "Nest.js",
    "웹앱 개발",
    "모바일 반응형 개발",
  ];

  const mainProjects: ProjectItem[] = [
    {
      title:
        "글로벌 B2B 더 폰드 프론트앤드 재구축 > 글로벌 진학 로드맵 플랫폼 서비스",
    },
    {
      title:
        "api generate(Open API generator)  도입 → api 관리를 용이하게 사용하기  위하여 도입 ",
    },
    {
      title:
        "Open API generator → api Orval 도입 API 코드 생성 시간이 약 15초에서 3초로 단축, React Query Hook이 자동 생성",
    },
    {
      title:
        "react-query 도입 → 명확한 타입과 캐시 구현 , api 연동하다가 프로젝트 규모가 커짐에 따라 상태관리를 위해 리패치, 로딩, 같은 기능 등을 효율적으로 하기 위해 리액트 쿼리 적용",
    },
    {
      title:
        "tailwind 도입, 디자인시스템 컴포넌트 구축 →  디자인 시스템이 코드상에는 있었으나 사용되지 않거나 레거시 하여 테일윈드 설정 부터 디자인 시스템 컴포넌트 새로 도입 하여 생산성 증가",
    },
    {
      title:
        "하나의 레포에서 관리하던 국내·국제 프로젝트를 각각 독립된 프로젝트로 명확히 분리 > 유지보수의 복잡성을 줄이고, 각 프로젝트에 대한 관리 효율성과 대응 속도를 향상",
    },
    {
      title:
        "English, Korean 버전 관리를 위한 iI18n 다국어 처리  작업 → 톨지사용하여 i18를 손쉽게 적용 (톨지의 장점: 개발자가 꼭 json를 수정 하지 않더라도 다른 사람들이 작업해서 적용시킬 수 있어 선택)",
    },
    {
      title:
        "unstated-next > Container Provider 패턴 도입 → context api 사용을 간편하게 쓰기위해 , container present 패턴 도입",
    },
    {
      title: "Magic String 제거 및 enum 적용",
    },
    {
      title: "Nextjs page 단위 별 개선, Section 및 Component 세분화 ",
      description: [
        "무거운 컴포넌트를 작은 단위로 분해하여 유지보수성 향상",
        "도메인 중심 설계 기반 폴더 구조 재구성",
      ],
    },

    {
      title:
        "디자인 컴포넌트 개발: Button, Modal (ReactDOM.createPortal을 사용한 Portal 구현) , Alert, Icon, TextInput, Select",
    },
    {
      title:
        "Page Router에서 App Router로 마이그레이션을 하여 기존 페이지 관리의 유연성과 확장성을 확보함",
      description: [
        "기존 Page Router 방식에서는 파일 기반 라우팅만 가능하고, 레이아웃 관리나 서버 컴포넌트, 중첩 라우트 등 최신 기능 사용이 제한적이었음. App Router를 도입함으로써 레이아웃 단위의 구성 및 재사용이 쉬워지고, 클라이언트/서버 컴포넌트의 분리를 통해 성능 최적화 및 유지보수가 용이해짐. 또한, 중첩 라우팅 구조를 통해 페이지 간 상태 공유와 코드 구조 정리가 가능해져 향후 신규 기능 추가 및 확장에 유리한 구조로 개선함",
      ],
    },

    {
      title:
        "NestJS 기반의 CRUD API를 직접 설계하고 구현함. 기본적인 엔드포인트 외에도 TypeORM을 활용해 테이블 간 관계 설정 및 조인 쿼리 작성 등을 수행하며 프론트엔드 요구사항에 맞는 응답 구조를 구성함. 이를 통해 프론트-백 간 연동 속도를 높이고, 전반적인 개발 일정에 기여함.",
    },
    {
      title: "후임 멘토링을 통한 팀 온보딩 기간 단축 및 생산성 향상",
    },
    {
      title: "기술 문서 작성 능력으로 팀 내 지식 공유 및 온보딩 문서화에 기여",
    },
    {
      title:
        "기존 GlobalContainer를 Zustand 기반 상태 관리로 리팩토링하여 글로벌 상태 관리 개선",
      description: [
        "Context 기반 상태 관리의 렌더링 성능 저하와 복잡한 전역 데이터 흐름 문제를 개선하고자 Zustand로 마이그레이션",
      ],
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
            <h1 className={`text-2xl font-bold mb-1 ${
              isDarkMode ? "text-white" : "text-black"
            }`}>LETITU</h1>
            <p className={`mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>Front-end Developer</p>
            <p className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>2024.07 ~</p>
          </div>
          <button
            onClick={onClose}
            className={`text-2xl transition-colors ${
              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽 - 사용 기술 */}
          <div className="lg:col-span-1">
            <h3 className={`font-semibold mb-3 ${
              isDarkMode ? "text-white" : "text-black"
            }`}>사용 기술</h3>
            <ul className="space-y-2">
              {techStack.map((tech, index) => (
                <li key={index} className={`flex items-center ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 - 주요 프로젝트 */}
          <div className="lg:col-span-2">
            <h3 className={`font-semibold mb-3 pb-2 border-b ${
              isDarkMode ? "text-white border-gray-600" : "text-black border-gray-300"
            }`}>
              글로벌 B2B 로드맵 플랫폼 서비스
            </h3>
            <div className="space-y-3">
              {mainProjects.map((project, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <div className="flex items-start">
                    <span className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}></span>
                    <div className="flex-1">
                      <h4 className={`font-medium mb-1 leading-tight text-sm ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}>
                        {project.title}
                      </h4>
                      {project.description && (
                        <div className={`text-xs leading-relaxed ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetituModal;
