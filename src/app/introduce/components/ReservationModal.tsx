"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs cursor-pointer animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-200 cursor-default ${
          isDarkMode
            ? "bg-zinc-900 text-white border border-zinc-800"
            : "bg-white text-gray-900 border border-gray-200"
        }`}
      >
        {/* 헤더 */}
        <div
          className={`flex items-center justify-between border-b pb-4 mb-6 ${
            isDarkMode ? "border-zinc-800" : "border-gray-200"
          }`}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <span>📅</span> 풀스택 예약 관리 플랫폼
            </h2>
            <p
              className={`text-xs md:text-sm mt-1 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Next.js 15+ App Router & Supabase PostgreSQL 기반의 실시간 통합
              예약 시스템
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-full p-2 text-lg transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:bg-zinc-800 hover:text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            }`}
          >
            ✕
          </button>
        </div>

        {/* 모달 본문 */}
        <div className="space-y-6 text-sm leading-relaxed">
          {/* 개요 및 링크 */}
          <div
            className={`p-4 rounded-xl border ${
              isDarkMode
                ? "bg-zinc-800/50 border-zinc-700"
                : "bg-blue-50/60 border-blue-200"
            }`}
          >
            <h3
              className={`font-bold text-base mb-2 flex items-center gap-2 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              <span>📌</span> 프로젝트 개요
            </h3>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              일반회원 및 관리자 권한별 맞춤 캘린더 뷰와 실시간 일정 및 예약
              관리를 제공하는 풀스택 웹 플랫폼입니다. Next.js 15+ App Router
              환경에서 Supabase PostgreSQL 데이터베이스 직접 연동, 보안
              JWT/OAuth 2.0 인증, 그리고 시간 슬롯 이중 선점 방지 아키텍처를
              바탕으로 구축되었습니다.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
              <a
                href="https://next-reservation-project-49mo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-white hover:bg-blue-700 transition"
              >
                🔗 라이브 데모 바로가기
              </a>
            </div>
          </div>

          {/* 테스트 계정 정보 */}
          {/* <div
            className={`p-4 rounded-xl border ${
              isDarkMode
                ? "bg-amber-950/40 border-amber-800/60"
                : "bg-amber-50/80 border-amber-300"
            }`}
          >
            <h3
              className={`font-bold text-base mb-2 flex items-center gap-2 ${
                isDarkMode ? "text-amber-400" : "text-amber-600"
              }`}
            >
              <span>🔑</span> 데모 시연용 테스트 계정
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs">
              <div
                className={`p-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-zinc-900 border-zinc-700"
                    : "bg-white border-amber-200"
                }`}
              >
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  👑 관리자 계정 (ROLE_ADMIN)
                </span>
                <p className="mt-1">
                  아이디:{" "}
                  <code
                    className={`px-1.5 py-0.5 rounded font-mono font-bold ${
                      isDarkMode
                        ? "bg-zinc-800 text-amber-200"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    tsetadmin1
                  </code>
                </p>
                <p className="mt-0.5">
                  비밀번호:{" "}
                  <code
                    className={`px-1.5 py-0.5 rounded font-mono font-bold ${
                      isDarkMode
                        ? "bg-zinc-800 text-amber-200"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    T@estadmin1
                  </code>
                </p>
                <p
                  className={`text-[11px] mt-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  기능: 전체 회원 예약 조회, 승인/거절/삭제 및 관리자 일정 등록
                </p>
              </div>
              <div
                className={`p-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-zinc-900 border-zinc-700"
                    : "bg-white border-amber-200"
                }`}
              >
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  👤 일반회원 계정 (ROLE_USER)
                </span>
                <p className="mt-1">
                  아이디:{" "}
                  <code
                    className={`px-1.5 py-0.5 rounded font-mono font-bold ${
                      isDarkMode
                        ? "bg-zinc-800 text-amber-200"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    tsetuser1
                  </code>
                </p>
                <p className="mt-0.5">
                  비밀번호:{" "}
                  <code
                    className={`px-1.5 py-0.5 rounded font-mono font-bold ${
                      isDarkMode
                        ? "bg-zinc-800 text-amber-200"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    T@estuser1
                  </code>
                </p>
                <p
                  className={`text-[11px] mt-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  기능: 시간 슬롯 예약 신청, 본인 예약 상세 확인 및 취소
                </p>
              </div>
            </div>
          </div> */}

          {/* 주요 기능 및 특징 */}
          <div>
            <h3
              className={`font-bold text-base mb-3 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span>🚀</span> 주요 기능 및 상세 특징
            </h3>
            <ul
              className={`space-y-2 text-xs md:text-sm list-disc list-inside ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li>
                <strong
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  FSD 모듈화 레이어 아키텍처:
                </strong>{" "}
                Feature-Sliced Design 원칙에 따라 `view`, `container` (비즈니스
                로직), `components` (UI), `types`, `constants` 레이어를 엄격히
                분리하여 유지보수성 극대화.
              </li>
              <li>
                <strong
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Supabase PostgreSQL 실시간 연동:
                </strong>{" "}
                DB `members` 및 `calendar_reservations` 테이블 쿼리로 회원
                권한(`role_type`) 및 예약 상태 데이터 100% 동기화.
              </li>
              <li>
                <strong
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  시간 슬롯 선점 방지 (`useOccupiedSlots`):
                </strong>{" "}
                비동기 커스텀 훅으로 타 유저가 이미 신청/확정한 시간 슬롯을 자동
                계산하여 선점 중복 신청 차단.
              </li>
              <li>
                <strong
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  잔상 없는 오버레이 로딩 스피너 (`CalendarLoadingSpinner`):
                </strong>{" "}
                초기 렌더링 및 달(Month) 이동 시 이전 예약 데이터의 잔상을 0초
                시점부터 즉시 비우고 로딩 스피너 노출.
              </li>
              <li>
                <strong
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  OAuth 2.0 & HttpOnly JWT 인증:
                </strong>{" "}
                카카오 및 구글 소셜 로그인 지원 및 안전한 쿠키 기반 세션 관리.
              </li>
              <li>
                <strong
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  모달 배경 클릭 닫기 UX & 1-Click 자동 입력:
                </strong>{" "}
                모달 바깥 배경(Backdrop) 영역 클릭 시 자연스럽게 닫히는 UX 및
                로그인 폼 테스트 계정 1-Click 자동 입력 지원.
              </li>
            </ul>
          </div>

          {/* 사용 기술 스택 */}
          <div>
            <h3
              className={`font-bold text-base mb-3 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span>🛠</span> 사용 기술 스택
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Next.js 15+ (App Router)",
                "TypeScript",
                "Supabase PostgreSQL",
                "Zustand",
                "TanStack Query v5",
                "Tailwind CSS v4",
                "JWT / OAuth 2.0 (Kakao, Google)",
                "Vitest",
                "Playwright",
              ].map((tech) => (
                <span
                  key={tech}
                  className={`rounded-lg px-3 py-1 font-medium ${
                    isDarkMode
                      ? "bg-zinc-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div
          className={`mt-8 flex justify-end border-t pt-4 ${
            isDarkMode ? "border-zinc-800" : "border-gray-200"
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`rounded-xl px-5 py-2 text-xs font-bold transition-colors ${
              isDarkMode
                ? "bg-zinc-700 text-white hover:bg-zinc-600"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
