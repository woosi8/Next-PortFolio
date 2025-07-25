"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Intro = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="pt-24 pb-16 px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" mb-12 mr-20 ">
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-4xl font-bold mb-4">
              귀찮음을 개발 동력으로 삼는 개발자, <br />
              <span className="text-blue-400">최 혁</span> 입니다
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

        <div
          className={`mt-16 rounded-lg p-8 transition-colors duration-300 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">INTRO</h2>
          <div
            className={`space-y-4 transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div>
              Web 개발을 다루는 4년차 개발자입니다. 결과 중심적인 사고를
              바탕으로 클라이언트의 요구를 명확하게 구현하는 것을 목표로 삼는
              개발자 입니다. <br />
            </div>
            <div>
              서비스 배타 부터 실제 서비스 운영하여 프론트앤드 개발을 담당한
              경험이 있습니다. 리액트,넥스트를 주로 활용하여 웹 애플리케이션을
              구축 해 왔습니다. <br />
            </div>
            <div>
              Tailwind와 Scss를 사용해 디자이너의 요구를 빠르고 명확하게
              구현하고, 디자인 시스템을 구축하여 유지보수를 용이하게
              만들었습니다. <br /> 코드 품질과 성능 최적화, 재사용성에 주의를
              기울이며, 업무를 효율적으로 수행하는 것을 가치로 삼고 있습니다.
              <br />
              협업을 통해 팀원들과 소통하며 문제를 해결하는 것을 중요시하며,
              항상 성장하고 발전하기 위해 노력하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
