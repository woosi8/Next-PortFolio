"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

interface HeypayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectItem {
  title: string;
  description?: string | string[];
}

const HeypayModal = ({ isOpen, onClose }: HeypayModalProps) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  const techStack = [
    "Next.js 15 (App Router)",
    "SSE (Server-Sent Events Real-time Orders)",
    "tRPC (@trpc/server, @trpc/client)",
    "Zod Schema",
    "Strict TypeScript",
    "FSD (Feature-Sliced Design) 변형",
    "Zustand (Global Session & POS Settings)",
    "BroadcastChannel (Dual Display Sync)",
    "@dnd-kit (Shortcut Key Pad Customization)",
    "unstated-next (Feature Container)",
    "TanStack Virtual / Table",
    "Radix UI + CVA",
    "Tailwind CSS",
    "Storybook",
    "Excel Stream Export (xlsx-js-style)",
    "useOverlay Modal Policy",
  ];

  const mainProjects: ProjectItem[] = [
    {
      title: "프론트엔드 리드로서 기획 의도 파악 및 전체 시스템/비즈니스 로직 구조 설계 총괄",
      description: [
        "기획 단계부터 주도적으로 참여하여 매장 환경별 POS 비즈니스 요구사항과 기획 의도를 명확히 파악하고, 전체 프론트엔드 아키텍처 구조 및 도메인 데이터 흐름 총괄 설계",
        "프론트엔드 파트 리더로서 팀 전체의 코딩 표준 및 레이어 가이드라인 수립, PO/백엔드/디자이너 간 연계 인터페이스 커뮤니케이션 주도",
      ],
    },
    {
      title: "실시간 주문 수신 및 매장 알림 파이프라인 (SSE: Server-Sent Events 연동)",
      description: [
        "신규 주방/테이블/배달 주문의 끊김 없는 수신을 위해 HTTP/2 기반 SSE(Server-Sent Events) 단방향 스트리밍 프로토콜 파이프라인 구축",
        "재연결(Reconnection) 자동 복구 및 백그라운드 탭 탭 활성화 시 메시지 손실 방지 이벤트 버스 연동으로 실시간 주문 알림 및 POS/주방 화면 즉시 업데이트 구현",
      ],
    },
    {
      title: "POS 글로벌 시스템 설정 동기화 아키텍처 (pos-settings, customer-display)",
      description: [
        "POS 동작 모드, VAN 결제 단말기 파라미터, 듀얼 고객 디스플레이 연동 상태를 Zustand 스토어와 BroadcastChannel로 연동하여 0.1초 미만 실시간 멀티 디바이스 동기화 구현",
        "다양한 프론트 장비(VAN 카드 단말기, 영수증 프린터, 바코드 스캐너, 전면 고객 디스플레이) 연동 시 발생하는 비동기 이벤트 제어",
      ],
    },
    {
      title: "영수증 템플릿 렌더링 & 커스텀 엔진 (pos-receipt)",
      description: [
        "로고 크기(SMALL~LARGE), 텍스트 정렬, 사업자 정보, 바코드/QR코드 매핑, 사용자 지정 문구를 실시간 DOM 미리보기로 제공하는 커스텀 엔진 구축",
        "@media print CSS 및 픽셀 비율 완벽 동기화로 80mm/58mm 감열지 프린터 인쇄 시 오차 없는 레이아웃 출력 보장",
      ],
    },
    {
      title: "Drag & Drop 기반 POS 단축키 커스텀 배치 시스템 (pos-shortcutkey)",
      description: [
        "@dnd-kit을 적용하여 매장 매니저가 POS 판매 화면 단축키 그리드 레이아웃과 키패드 크기/색상을 자유롭게 드래그 앤 드롭으로 배치 가능하도록 유연한 UI 설계",
        "단축키 배치 상태의 불변성 관리 및 그리드 충돌 감지 로직 자체 구현",
      ],
    },
    {
      title: "FSD(Feature-Sliced Design) 변형 레이어 분리 및 단방향 의존성 표준화",
      description: [
        "view(순수 UI), container(로컬 비즈니스 로직), components(재사용 UI), types(타입), constants(상수) 계층 명확 정의",
        "관심사의 철저한 분리와 단방향 의존성 보장으로 대규모 팀 협업 환경에서도 오염 없는 확장성 확보",
      ],
    },
    {
      title: "tRPC + Zod 기반 End-to-End Type Safety 구축 (Zero any, Zero Magic String)",
      description: [
        "백엔드 라우터 타입과 프론트엔드 API 호출부를 100% 실시간 동기화하여 빌드 타임(tsc) 타입 안전성 확보",
        "프로젝트 전반 any 타입 사용 금지 및 매직 스트링, 하드코딩 철저히 배제",
      ],
    },
    {
      title: "2-Layer 상태 관리 전략 (Zustand + unstated-next Container)",
      description: [
        "전역 세션(인증, POS 장비/매장 설정)은 Zustand로 경량화 관리하여 불필요한 전역 리렌더링 차단",
        "피처 단위 로컬 로직은 unstated-next Container로 캡슐화하여 화면 언마운트 시 자동 가비지 컬렉션(GC) 유도",
      ],
    },
    {
      title: "DOM 가상화(Virtualization) 및 수만 건 엑셀 스트리밍 가공 유틸리티 설계",
      description: [
        "@tanstack/react-table + @tanstack/react-virtual 결합으로 수만 건 데이터 스크롤 타임 60fps 매끄러운 성능 달성",
        "xlsx-js-style 기반 클라이언트 가공 유틸리티(fetchAndExportToExcel) 설계로 브라우저 프리징 없는 엑셀 수출 구현",
      ],
    },
    {
      title: "POS 결제 예외 처리 및 선언적 useOverlay 모달 정책 구축",
      description: [
        "POS 복합 결제(EXCHANGE_VOUCHER 등) 에러 발생 시 Toast 통보 대신 사용자 승인 필수 Alert/Confirm 모달 정책 수립",
        "useOverlay 커스텀 훅을 기반으로 비동기 결제 승인 흐름과 중첩 모달 상태를 선언적이고 안전하게 제어",
      ],
    },
    {
      title: "디자인 토큰 기반 헤드리스 UI 모듈화",
      description: [
        "Radix UI + CVA + Tailwind CSS 조합으로 웹 접근성(a11y)이 보장된 커스텀 UI 컴포넌트 시스템 구축 및 Storybook 모듈화",
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
            <h1
              className={`text-2xl font-bold mb-1 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              heypay (B2B SaaS CRM/POS)
            </h1>
            <p
              className={`mb-1 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Frontend Architect & Lead
            </p>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              2024.07 ~ 현재 (재직중)
            </p>
          </div>
          <button
            onClick={onClose}
            className={`text-2xl transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽 - 사용 기술 */}
          <div className="lg:col-span-1">
            <h3
              className={`font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              사용 기술 및 아키텍처
            </h3>
            <ul className="space-y-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className={`flex items-center text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 - 주요 프로젝트 */}
          <div className="lg:col-span-2">
            <h3
              className={`font-semibold mb-3 pb-2 border-b ${
                isDarkMode
                  ? "text-white border-gray-600"
                  : "text-black border-gray-300"
              }`}
            >
              엔터프라이즈 아키텍처 & 주요 성과
            </h3>
            <div className="space-y-4">
              {mainProjects.map((project, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4
                    className={`font-medium mb-1 leading-tight text-sm ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h4>
                  {project.description && (
                    <div
                      className={`text-xs leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeypayModal;
