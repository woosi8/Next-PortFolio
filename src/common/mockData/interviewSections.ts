export const interviewSectionsData = {
  interviewSections: [
    {
      id: 1,
      title: "핵심 포지셔닝 & 자기소개",
      icon: "👤",
      description:
        "5년 차 프론트엔드 개발자 자기소개 및 엘리베이터 피치 (3가지 포맷)",
      content: `[🎯 프론트엔드 리드 (Senior-Bound FE) 핵심 포지셔닝]
1. 기획 의도 파악 및 리더십: 비즈니스 기획 의도 파악부터 참여하여 프론트엔드 파트 전체 아키텍처 구조 설계, 데이터 흐름 및 핵심 로직 설계 총괄
2. POS 시스템 설정 개발 역량: POS 장비/VAN 결제 단말기 연동, 영수증 템플릿 커스텀 엔진, Drag&Drop 단축키 배치, 듀얼 고객 전면 디스플레이 실시간 동기화 개발 총괄
3. 아키텍처 설계 및 팀 협업 표준화 역량: FSD 변형 레이어 분리(view/container/components/types/constants), 단방향 의존성, 가이드라인 제공
4. 복잡한 도메인(비즈니스 로직) 문제 해결 능력: POS 결제 예외 처리, Alert/Confirm 중첩 모달 정책
5. 대용량 데이터 처리 및 성능 최적화: DOM 가상화 렌더링, 수만 건 엑셀 스트리밍 가공 유틸리티
6. End-to-End 타입 안전성 및 코드 품질 유지 역량: tRPC + Zod, Zero any, Zero Hardcoding/Magic String

--------------------------------------------------

[📌 1분 자기소개 & 면접 오프닝 피치]
"안녕하세요, 기획 단계부터 참여하여 비즈니스 의도를 파악하고, 다양한 매장 환경에 맞춘 POS 시스템 환경 설정(POS 장비/VAN 단말기 연동, Drag & Drop 기반 판매 단축키 키패드 커스터마이징, 영수증 템플릿 제어 엔진, 듀얼 고객 전면 디스플레이 연동)부터 11개 이상의 핵심 도메인(POS 결제, 재고, 매출, 마케팅 등) 전체 프론트엔드 구조를 총괄 설계해 온 프론트엔드 리드 최혁입니다.

특히 Next.js App Router와 tRPC, Zod를 결합해 백엔드부터 프론트엔드까지 단 한 줄의 타입 누수도 없는 완벽한 End-to-End 타입 안전성을 확보했습니다. 또한 FSD(Feature-Sliced Design) 변형 폴더 구조와 'Zustand + unstated-next(Container 패턴)' 기반의 2-Layer 상태 관리 전략을 설계하여, 대규모 팀 협업과 도메인 확장 상황에서도 기술 부채가 쌓이지 않는 지속 가능한 코어 아키텍처를 구현하는 데 강점이 있습니다."

--------------------------------------------------

[📌 서술형 자기소개서 (Cover Letter)]
[프로덕트의 안정성과 팀의 생산성을 동시에 끌어올리는 5년 차 프론트엔드 개발자]

안녕하세요, 5년 차 프론트엔드 개발자 최혁입니다.
저는 단순히 화면을 구현하는 것에 그치지 않고, 복잡한 비즈니스 요구사항과 매장 현장의 장비 환경(VAN 카드 단말기, 영수증 프린터, 듀얼 전면 디스플레이 등)을 고려한 선언적 아키텍처와 결함 없는 시스템으로 전환하는 데 가치를 둡니다.

통합 B2B SaaS CRM/POS 시스템 프로젝트에서는 Next.js App Router 위에 실무형 FSD(Feature-Sliced Design) 아키텍처를 도입하여 view(순수 UI), container(로컬 비즈니스 로직), components(재사용 UI), types, constants 계층을 명확히 정의했습니다. 이를 통해 관심사를 철저히 분리하고 단방향 의존성을 보장하여, 대규모 협업 환경에서도 오염 없는 확장성을 확보했습니다.

또한 POS 멀티 디바이스 환경 설정을 위해 Zustand 스토어와 BroadcastChannel 프로토콜을 연동하여 듀얼 고객 디스플레이 전송 지연을 0.1초 미만으로 동기화하였고, @dnd-kit 기반의 단축키 키패드 배치와 @media print 픽셀 비율 완벽 동기화 영수증 템플릿 커스텀 엔진을 총괄 구축했습니다. tRPC와 Zod Schema를 활용해 API 응답 변경이 프론트엔드 빌드 타임(tsc)에 즉시 감지되는 통합 타입 시스템을 갖춰 서비스 품질과 팀 생산성을 동시에 끌어올렸습니다.

앞으로도 탄탄한 설계 역량과 성능 최적화 경험을 토대로 비즈니스 목표 달성에 크게 기여하는 엔지니어로 성장하겠습니다.

--------------------------------------------------

[📌 한 줄 헤드라인 & 키워드 뱃지]
🚀 최혁 | Senior-Bound Frontend Engineer (5년 차)
"FSD 아키텍처와 POS 시스템 제어 엔진, tRPC E2E Type Safety로 복잡한 B2B CRM/POS 도메인을 단순하고 견고하게 구현하는 개발자"

• Framework & Architecture: React 18, Next.js 15 (App Router), Modified FSD (view / container / components / types / constants)
• POS System & Hardware Engine: BroadcastChannel Dual Display Sync (0.1s), @dnd-kit Shortcut Key Custom, PosReceipt Canvas Engine (@media print)
• Type Safety & API: Strict TypeScript, tRPC (@trpc/server, @trpc/client), Zod (Zero any, Zero Hardcoding)
• State Management: 2-Layer Architecture — Zustand (Global Session/Auth/POS Settings) + unstated-next (Feature Container)
• Performance & Ecosystem: TanStack Virtual / Table, Radix UI + CVA, Storybook, Recharts, Excel Stream Export
• Testing & Quality: Vitest, MSW, Testing Library, useOverlay Declarative Modal Policy`,
    },
    {
      id: 2,
      title: "4대 핵심 기술 포인트",
      icon: "💻",
      description:
        "아키텍처/타입안전성, 상태관리/POS결제, DOM가상화/성능최적화, POS시스템설정/하드웨어제어엔진",
      content: `① [아키텍처/타입 안전성] FSD 기반 레이어 분리 & tRPC End-to-End 타입 시스템 구축
• 배경 & 문제점: 대규모 CRM/ERP 프로젝트는 도메인이 커질수록 상태 얽힘 현상이 발생하고, 백엔드 API 명세 변경 시 프론트엔드에서 런타임 에러(Null/Undefined)가 빈번하게 발생합니다. 또한 개발자마다 폴더/로직 분리 기준이 달라 기술 부채가 누적됩니다.
• 해결 방법 & 설계 포인트:
  - FSD(Feature-Sliced Design) 변형 아키텍처 도입: 코드를 명확한 책임 단위 (view: 순수 UI 렌더링, container: 로컬 뷰-컨트롤러/비즈니스 로직, components: 재사용 UI 컴포넌트, types: TypeScript 인터페이스/Enum, constants: 상수값)로 철저히 분리했습니다.
  - tRPC + Zod 기반 E2E Type Safety: @trpc/client, @trpc/next, @trpc/server와 Zod 스키마를 결합하여 백엔드 라우터 타입과 프론트엔드 호출부가 100% 실시간 동기화되도록 구축했습니다. API 변경 시 빌드 타임(tsc)에 감지됩니다.
  - Strict Code Quality Rule: 프로젝트 전반에 any 타입 사용과 매직 스트링, 하드코딩을 전면 금지하고 상수로 구조화하여 유지보수성을 극대화했습니다.

--------------------------------------------------

② [상태 관리 & 복잡한 결제/도메인 로직] 2-Layer 상태 관리 전략 및 POS 결제 플로우 제어
• 배경 & 문제점: 모든 상태를 전역 스토어(Redux, Zustand 등)에 과도하게 밀어 넣으면 스토어가 비대해지고 원치 않는 전역 리렌더링이 유발됩니다. 또한 POS 복합 결제, 쿠폰 마케팅 연동 등 예외처리가 복잡한 비즈니스 로직 제어 시 상태 오염 위험이 큽니다.
• 해결 방법 & 설계 포인트:
  - 2-Layer 상태 관리 전략:
    * 전역 공유 데이터 Layer: 로그인 세션, 매장 설정, POS 장비 연동 등 생명주기가 앱 전체인 데이터는 Zustand로 경량화하여 관리.
    * 피처/페이지 단위 로컬 상태 Layer: unstated-next 기반의 Container 패턴(OtherStoresContainer, PosReceiptContainer 등)을 적용해 화면(view.tsx)과 뷰 컨트롤러 비즈니스 로직을 격리하고, 마운트 해제 시 자동 가비지 컬렉션(GC) 유도.
  - 결제 오류 및 선언적 오버레이 정책 고도화: POS 결제 연동(EXCHANGE_VOUCHER 복합 결제 등) 처리 중 발생하는 에러는 치명적이므로, 단순 Toast 통보 방식 대신 사용자 승인을 보장하는 Alert/Confirm 모달 정책을 수립. useOverlay 커스텀 훅을 설계하여 비동기 결제 승인 흐름과 중첩 모달 상태 제어를 선언적이고 명확하게 처리했습니다.

--------------------------------------------------

③ [대용량 데이터 & 성능 최적화] DOM 가상화(Virtualization)와 수만 건 엑셀 가공/내보내기
• 배경 & 문제점: 타점 재고 검색(other-stores), 일자별/시간대별 대용량 매출/거래 내역 등 수천~수만 건의 그리드 데이터를 렌더링하거나 엑셀로 추출할 때 대량의 DOM 생성으로 인한 브라우저 프리징(Freezing) 및 메모리 병목 현상이 발생합니다.
• 해결 방법 & 설계 포인트:
  - DOM 가상화 렌더링: @tanstack/react-table과 @tanstack/react-virtual을 결합하여 현재 뷰포트에 보이는 DOM 노드만 동적으로 렌더링함으로써 수만 건 데이터 환경에서도 60fps의 매끄러운 스크롤 성능을 달성했습니다.
  - 클라이언트 엑셀 가공 유틸리티 설계: xlsx 및 xlsx-js-style을 활용하여 최대 수만 건(EXCEL_EXPORT_MAX_ROWS) 데이터 가공 시 브라우저 병목 없이 병합/정렬/셀 스타일링 후 바로 추출 가능한 fetchAndExportToExcel 모듈을 설계했습니다.

--------------------------------------------------

④ [POS 시스템 설정 & 하드웨어/디스플레이 제어 엔진] 멀티 디바이스 POS 환경 설정 및 영수증/단축키/SSE 주문 시스템 개발
• 배경 & 문제점: 다양한 매장 환경별 POS 단말기 파라미터 제어, 신규 주문 수신 시 실시간 매장 알림 처리, 감열지 영수증 프린터의 출력 픽셀 오차, 매장 매니저의 POS 판매 화면 단축키 커스텀 요청, 듀얼 고객 전면 디스플레이 연동 시 상태 동기화 지연 등 멀티 디바이스 및 실시간 데이터 연동 복잡도가 존재합니다.
• 해결 방법 & 설계 포인트:
  - 실시간 주문 수신 SSE 파이프라인 (pos-order-stream): HTTP/2 기반 SSE(Server-Sent Events) 단방향 스트리밍 프로토콜을 도입하여 실시간 신규 주문 알림 수신 및 POS/주방 디스플레이 화면 자동 갱신 파이프라인 구축.
  - POS 글로벌 시스템 설정 동기화 아키텍처 (pos-settings, customer-display): POS 동작 모드, 결제 단말기 파라미터, 듀얼 고객 디스플레이 연동 상태를 Zustand 스토어와 BroadcastChannel로 연동하여 0.1초 미만 실시간 멀티 윈도우 동기화를 구현했습니다.
  - 영수증 템플릿 렌더링 & 커스텀 엔진 (pos-receipt): 로고 크기(SMALL~LARGE), 사업자 정보, 바코드/QR코드 매핑, 사용자 지정 문구를 실시간 캔버스/DOM 미리보기로 제공하고 @media print CSS와 픽셀 비율을 완벽 동기화하여 실물 감열지 인쇄 시 레이아웃 일치를 보장했습니다.
  - Drag & Drop 기반 POS 단축키 커스텀 배치 시스템 (pos-shortcutkey): @dnd-kit을 적용하여 매장 매니저가 POS 판매 화면 단축키 그리드 레이아웃과 키패드 크기/색상을 자유롭게 드래그 앤 드롭으로 배치 가능하도록 구축했습니다.
  - 디자인 토큰 기반 헤드리스 UI: Radix UI + CVA(class-variance-authority) 조합을 활용해 웹 접근성(a11y)이 보장된 커스텀 UI 컴포넌트 시스템을 구축하고 Storybook으로 모듈화했습니다.`,
    },
    {
      id: 3,
      title: "5년 차 심층 꼬리질문 (Deep-Dive Q&A)",
      icon: "🎯",
      description:
        "POS 설정/하드웨어 제어, SSE 주문 통신, tRPC 선택 이유, Zustand+unstated-next 2-Layer 조합, 대용량 가상화 트러블슈팅, FSD 변형 이유",
      content: `Q. 실시간 주문 알림 수신 시 WebSocket 대신 SSE(Server-Sent Events)를 선택한 이유는 무엇인가요?
A. "주문 수신 및 주방 알림 처리 도메인은 서버에서 프론트엔드로 데이터를 내려받는 단방향 통신 특성을 가집니다. WebSocket 대비 SSE는 HTTP/2 단일 커넥션 상에서 동작하여 별도의 양방향 프로토콜 오버헤드가 없으며, 브라우저 표준 EventSource API의 자동 재연결(Reconnection) 기능과 HTTP 네이티브 스트리밍의 가벼움을 활용할 수 있어 서버 및 클라이언트 메모리 리소스를 최적으로 절약할 수 있었기 때문입니다."

--------------------------------------------------

Q. POS 시스템 설정(영수증 템플릿, 단축키 DnD, 듀얼 디스플레이) 개발 시 가장 복잡했던 점과 해결 방식은?
A. "가장 까다로웠던 점은 듀얼 고객 디스플레이 연동 시 메인 POS 창의 결제/주문 변경 상태가 딜레이 없이 실시간 전달되어야 하는 점과, 감열지 영수증 프린터 인쇄 시 화면의 DOM 렌더링 레이아웃이 종이로 출력되었을 때 인쇄 비율이 찌그러지는 현상이었습니다.
이를 해결하기 위해 브라우저 간 가벼운 IPC인 BroadcastChannel 프로토콜을 Zustand 스토어 구독과 결합하여 메인 창과 전면 디스플레이 창 간 상태 전달 속도를 0.1초 미만으로 동기화했습니다. 또한 영수증 템플릿 엔진은 @media print 규격과 DPI 별 픽셀 레이아웃을 엄격히 분리하여 로고(SMALL~LARGE), QR 매핑이 실물 80mm/58mm 감열지 인쇄 시 100% 일치하도록 보정했고, 단축키 배치는 @dnd-kit과 드래그 앤 드롭 충돌 감지 로직을 도입해 매장 매니저가 자유롭게 판매 키패드를 구성할 수 있도록 개발했습니다."

--------------------------------------------------

Q. 왜 tRPC를 선택했나요? REST나 GraphQL 대비 장점은 무엇인가요?
A. "Next.js 기반 모노레포/풀스택 환경이었기에, GraphQL처럼 CodeGen이나 별도 쿼리 언어 스키마 생태계를 구축하는 오버헤드 없이 Pure TypeScript 타입 추론만으로 프론트와 백엔드가 100% 실시간 동기화되는 tRPC가 생산성 및 빌드 타임 안전성 면에서 가장 탁월했기 때문입니다."

--------------------------------------------------

Q. Zustand와 unstated-next(Container)를 조합하여 쓴 이유는?
A. "모든 피처 상태를 Zustand 전역 스토어에 넣으면 불필요한 의존성 얽힘과 메모리 누수가 발생합니다. Zustand는 인증/POS 설정 등 앱 전반 데이터에 집중시키고, 특정 화면의 복잡한 비즈니스 로직과 API 상태는 unstated-next Container로 묶어 해당 View 언마운트 시 자동 GC(가비지 컬렉션) 되도록 2-Layer로 분리하여 스토어 청정도를 유지했습니다."

--------------------------------------------------

Q. 대용량 재고 데이터 가상화 적용 시 발생한 트러블슈팅 경험이 있나요?
A. "가상화(useVirtualizer) 적용 중 행(Row)의 높이가 동적으로 변할 때 스크롤 튀김(Jump) 현상이 있었습니다. 이를 해결하기 위해 정확한 estimateSize를 지정하고, DOM 요소의 동적 측정(measureElement)과 fetchNextPage 비동기 로딩 시 스크롤 offset 위치를 보정하는 계산 로직 및 옵저버 패턴을 결합하여 완벽한 실시간 가상화 스크롤을 구현했습니다."

--------------------------------------------------

Q. FSD(Feature-Sliced Design)를 원본 그대로 쓰지 않고 변형한 이유는?
A. "정통 FSD의 6단계 레이어(shared -> entities -> features -> widgets -> pages -> app)는 당사 프로젝트 규모 대비 폴더 탐색 피로도가 높았습니다. 실무 효율을 위해 Next.js App Router 생태계에 맞춰 도메인 내부에 view(UI) / container(로직) / components / types / constants로 단순화하여, FSD의 핵심인 '단방향 의존성'과 '관심사 분리' 원칙은 엄격히 준수하되 팀 학습 곡선과 탐색 오버헤드를 대폭 낮췄습니다."`,
    },
    {
      id: 4,
      title: "면접 최종 체크리스트 & 트러블슈팅",
      icon: "📋",
      description:
        "아키텍처 복기 다이어그램 및 2대 핵심 트러블슈팅 사례 (성능/도메인)",
      content: `[🎯 면접 전 최종 체크리스트]
1. 아키텍처 다이어그램 트레이닝:
   - Next.js App Router ↔ tRPC / Zod ↔ Zustand / Container ↔ View 간의 데이터 흐름과 단방향 의존성을 화이트보드나 종이에 즉석에서 그릴 수 있도록 복기.

2. 핵심 트러블슈팅 사례 2가지 체화:

• [사례 A - 성능 트러블슈팅]
  - 상황: 타점 재고 및 대용량 거래 내역 수만 건 렌더링 시 대량의 DOM 생성으로 브라우저 메인 스레드가 블로킹되는 현상 발생.
  - 해결: @tanstack/react-virtual 기반 DOM 가상화 적용 + xlsx-js-style 기반 클라이언트 차원 스트리밍 엑셀 가공 모듈(fetchAndExportToExcel) 연동.
  - 결과: 수만 건 데이터 스크롤 타임 60fps 유지 및 엑셀 내보내기 시 메인 스레드 프리징 방지.

• [사례 B - 도메인/UX 트러블슈팅]
  - 상황: POS 복합 결제(EXCHANGE_VOUCHER 등) 처리 중 네트워크 오류 시 결제 상태 취소 미보장 및 중첩 모달 상태 꼬임 위험.
  - 해결: 단순 Toast 통보 방식 대신 선언적 useOverlay 커스텀 훅을 기반으로 Alert/Confirm 중첩 모달 승인 정책 수립 및 결제 트랜잭션 예외 흐름 선언적 제어.
  - 결과: 결제 에러 처리 시 사용자 오류율 0% 달성 및 모달 상태 관리 안전성 극대화.

• [사례 C - 대규모 네트워크/실시간 통신 최적화]
  - 상황: Q-Order 실시간 주문 수신(SSE) 중 네트워크 순간 단절 발생 시, 수천 대의 클라이언트가 동일 시점에 동시에 재접속을 시도하여 Thundering Herd(동시 재접속 폭주) 및 백엔드 서버 마비 위험 존재.
  - 해결: Exponential Backoff(지수 백오프)에 Random Jitter(무작위 지연)를 결합한 재접속 알고리즘을 구현하고, 연속 3회 실패 시 서킷 브레이커 작동 및 AbortController 기반 자원 해제 로직 구축.
  - 결과: 서버 단절 시 클라이언트 재접속 피크 트래픽을 90% 이상 확률적으로 분산시키고, 무한 재연결로 인한 브라우저 메모리 누수 및 백엔드 커넥션 고갈 완벽 차단.

• [사례 D - 인증/네트워크 아키텍처 트러블슈팅]
  - 상황: 액세스 토큰 만료 시 화면 내 다수 컴포넌트에서 동시에 401 Unauthorized 에러가 발생하며 서버로 중복 Refresh API가 동시 전송(Token Refresh Stampede)되어 인증 서버 부하 가중.
  - 해결: tRPC 및 TanStack Query 인터셉터 레이어에 isRefreshing 락 플래그와 failedQueue 기반 Single-Flight 패턴 구축. 최초 1회만 Refresh API를 호출하고 대기 중인 요청은 갱신 완료 후 일괄 재실행(Drain).
  - 결과: 토큰 만료 시 발생하던 불필요한 중복 Refresh API 호출을 1회로 단축하여 백엔드 인증 서버 부하 90% 이상 절감 및 세션 전환 안정성 확보.

• [사례 E - 대용량 데이터/프론트엔드 렌더링 최적화]
  - 상황: 수만 건의 재고 수불부 및 매출 리포트 데이터 조회 시 전체 DOM 동시 생성으로 인해 브라우저 탭 멈춤(Main Thread Blocking) 및 메모리 초과(OOM) 현상 발생.
  - 해결: @tanstack/react-virtual 기반으로 뷰포트 내 보이는 20~30개 영역만 동적 재사용하는 DOM 가상화(Windowing) 기법 도입 및 TanStack Query staleTime(30초)·Window Focus Guard를 조합한 캐싱 정책 수립.
  - 결과: 수만 건 대용량 조회 시에도 초기 렌더링 시간 90% 단축, 60fps의 부드러운 스크롤 성능 및 브라우저 메모리 사용량 최소화 달성.

• [사례 F - POS 도메인/결제 무결성 트러블슈팅]
  - 상황: POS 결제 승인 API 응답 지연 시 매장 점원의 연속 입력(연타) 및 외부 키 이벤트로 인한 중복 승인(Double Charge) 결제 사고 위험 존재.
  - 해결: 결제 진입 즉시 결제 상태 머신(PROCESSING)과 연동하여 전역 상호작용을 선점(Preempt)하고, ESC 및 배경 클릭 등 모달 이벤트를 물리적으로 차단(e.preventDefault)하는 동기 락(Lock) 메커니즘 구축.
  - 결과: 네트워크 지연 및 사용자 연타 상황에서도 단 1회의 결제 무결성 보장 및 중복 결제 오류 발생률 0% 달성.
  
• [사례 5 - 하드웨어/POS 단말기 프로토콜 통신 트러블슈팅]
  - 상황: 순수 웹 브라우저 환경에서 보안 정책(CORS, Mixed Content) 및 모듈 제약으로 인해 로컬 결제 단말기(KCP/KSNET VCAT)와의 직접적인 카드/현금 영수증 결제 통신 및 하드웨어 프린팅 불가.
  - 해결: RSA 비대칭 암호화(JSEncrypt)를 통한 데이터 보안화, 동적 script 노드 라이프사이클 관리 기반의 JSONP 및 WebSocket 하이브리드 브릿지 엔진 구축. 48컬럼 바이트 연산 정렬 및 QR 코드 분할 출력 알고리즘 구현.
  - 결과: 무거운 플러그인 설치 없이 브라우저 환경에서 IC 카드 결제, 현금영수증, 영수증 텍스트/QR 프린팅을 100% 무결성으로 실시간 제어 성공.

• [사례 6 - 듀얼 디스플레이 하드웨어 이중화 및 상태 동기화]
  - 상황: POS 메인 모니터와 점원/고객용 2차 보조 디스플레이(Secondary Display) 간의 실시간 장바구니/결제 화면 동기화 및 모니터 창 분리 관리 필요.
  - 해결: Multi-Window API 관리자(WindowManager) 및 브라우저 이벤트 버스를 구축하여 듀얼 모니터 팝업 창의 생명주기를 감시/제어하고, 결제 및 상품 변경 이벤트를 실시간 동기화.
  - 결과: 이종 디스플레이 간 데이터 교동 지연 시간 0ms 달성 및 실시간 고객용 디스플레이 피드백 경험 극대화.
  
  `,
    },
  ],
};
