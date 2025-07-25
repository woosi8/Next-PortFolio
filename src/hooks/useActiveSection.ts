"use client";

import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 헤더 높이 고려
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 페이지 끝에 거의 도달했을 때는 마지막 섹션을 활성화
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // 현재 스크롤 위치가 섹션 범위 내에 있는지 확인
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionIds[i]);
            break;
          }
          // 또는 섹션의 절반 이상이 화면에 보이는지 확인
          else if (scrollPosition >= sectionTop - windowHeight / 2) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // 초기 실행
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    // 클린업
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};