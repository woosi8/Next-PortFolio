# Hyuck Portfoilo

Next.js 기반의 포트폴리오 입니다. 

## 프로젝트 개요

Claude AI 바이브 코딩으로 구성하였습니다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **기타**: emailjs

## Getting Started

### 개발 서버 실행

```bash
yarn dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 프로덕션 빌드

```bash
yarn build
```


## 환경 변수

```bash
# API 설정
NEXT_PUBLIC_API_DOMAIN=""           # API 서버 도메인

# 환경 설정 (qa, dev, production)
NEXT_PUBLIC_ENV=""                  # 현재 환경

# 개발 도구
NEXT_PUBLIC_TOLGEE_API_KEY=""       # Tolgee 국제화 API 키
NEXT_PUBLIC_TOLGEE_API_URL=""       # Tolgee API URL
```
## 빌드 및 배포

### 배포 환경

본 프로젝트는 **Vercel**를 사용하여 GitHub 연동을 통한 자동 배포를 지원합니다.

### 빌드 최적화
- Next.js 자동 최적화 활용

### 개발 도구
- ESLint: 코드 품질 관리
- TypeScript: 타입 안전성
- Prettier: 코드 포맷팅
