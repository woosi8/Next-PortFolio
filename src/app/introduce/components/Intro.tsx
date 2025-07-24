"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Intro = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="pt-24 pb-16 px-6">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              편리함을 추구하는 개발자,
              <span className="text-blue-400 block">최 혁</span>
              입니다
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Web을 다루는 4년차 개발자 최 혁 입니다.
            </p>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">TS</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    가전 &gt; 티맥스 &gt; 가우디오랩
                  </p>
                  <p className="text-blue-400 text-sm">세직충</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                편리함을 추구하는 핸디의 지식 블로그
                <br />
                @Dev-blog 60만조회수 글(3807개)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">INTRO</h2>
          <div className="text-gray-300 space-y-4">
            <p>Web을 다루는 4년차 개발자 최 혁 입니다.</p>
            <p>
              가우디오랩에서 프론트엔드 리드로, 가우디오웹의 B2B, 또는 B2C,
              그리고 내부들을 만들고 있습니다.
              <br />
              이전에는 솔루션을런티 서비스 기업을 창업하고, 티맥스
              에이아이테크에서(티맥스소프트를) 만들었습니다.
            </p>
            <p>
              현재는: 를, 여럼 넘어 캠핑도 같은 취미에서 휴식을 추구고 있습니다.
              <br />
              아래 위로 supabase, prisma 같은 서비스를 경험하심과 취미로 이번에
              Elixir 패턴을 취종습니다.
            </p>
            <p>
              사내의 개발자들과 프로젝트 집뜻 힘숨과, 지음첨허 사람 활용할 안쪽
              인간을 까지 이장내게 됩니다.
              <br />
              그의 집에 좋은 보록 취하기는 것뿐 의식의 삶기 사업헸습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
