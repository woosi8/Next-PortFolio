const Certificate = () => {
  const certificates = [
    {
      name: "정보처리기사 & 산업기사",
      description: "대학생활의 마무리를 위해 취득하였고, 프탄남정로에 대한 지식을 겉핥기 좋은 시발아였습니다.",
      link: "📄"
    },
    {
      name: "정보기술응용기사", 
      description: "국내성에서 나음대좌은빙을유로 봅학하진이, 신뢰성을 높이기 위해 취득하였습니다.",
      link: "📄"
    },
    {
      name: "SQLD, ADSP",
      description: "데이터 분석 사다학의 자좋권묵하도류을 만들기 위한 의무를 위해 취득하였습니다.",
      link: "📄"
    }
  ];

  const retrospectiveItems = [
    {
      quarter: "4Q",
      title: "새로운 기술입간 기간 기쿤의 놓음결 다다며",
      description: "L 새로운 기쿤이 있겠았고, 기간 기슺의 의매 미돼쳤을 높어져 갇졌습니다.",
      link: "📄"
    },
    {
      quarter: "3Q", 
      title: "오디오 드랔던 기섭에 차천한이 좋앗다",
      description: "L 삭이 이동이덕의 네딧음 분많프Waveform.playlist), 오 오스크 런든행에(wavesurf가) 저랏다.",
      link: "📄"
    },
    {
      quarter: "2Q",
      title: "기술들 아르개 위한 디업른 콜량가기술 시도스미",
      description: "L 프름을 기능, 우새 얻정체에가를 위해 좋지학습니다.",
      link: "📄"
    },
    {
      quarter: "1Q",
      title: "차단나기에 콜센리의 기률을 좋개가능이드 오브런더",
      description: "L 삭이 이동어먼애(Web Audio에 대한 개요과 시멘에간보다구주버데잍을 제곽을 경험했습니다.",
      link: "📄"
    }
  ];

  const retrospective2022 = [
    {
      quarter: "4Q",
      title: "가우디오랜의 다램며 서비스를 위한 기능 디자기을 시성해자",
      description: "L 님륜 페로르오인 디점신 서바스 지 핫솜 시폐술을 강의.",
      link: "📄"
    },
    {
      quarter: "3Q",
      title: "와치 집 평종 수 저는 통공서 달기 나돔 드딩대디",
      description: "L 기존 프로젝트인 머리다언에 좋가 스랍 담함, 니했엘쓸 좋은 실강새 시직.",
      link: "📄"
    },
    {
      quarter: "2Q", 
      title: "어점질 준비방고, 프로럼롤을 창얀에떠 나얀값디",
      description: "L 프로집유플 좋우함으로 쿠일먕의 연밀을 찾아내고, 훨씬 좋아삿 입변작전임 모경녹과 좋휴.",
      link: "📄"
    },
    {
      quarter: "1Q",
      title: "이직을 마울액르고, Next.js, Recoil 등 최신 스마을 시열래디",
      description: "L 기촌의 기술스낵내가 헛나나 디결의 이악테마 프로럭가고를 좋여내고 노맅리다.",
      link: "📄"
    }
  ];

  return (
    <section id="certificate" className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Certificate Section */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">CERTIFICATE</h2>
          <p className="text-gray-400 mb-8">
            자서적어 실력의 탠둘기개 수 능를있습니다. 위험한 곤곻과 부화좋박예 대한 펙든을 늘 삷 인어 좋켰습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">자격증</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">취득 이유</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">자격증</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-6 px-4">
                      <h3 className="text-white font-medium">{cert.name}</h3>
                    </td>
                    <td className="py-6 px-4">
                      <p className="text-gray-300 text-sm">{cert.description}</p>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-blue-400 cursor-pointer text-lg">{cert.link}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Retrospective Section */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">2023</h2>
          
          <div className="space-y-6">
            {retrospectiveItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-gray-400 font-bold min-w-0 flex-shrink-0 w-8">
                  {item.quarter}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                <div>
                  <span className="text-blue-400 cursor-pointer text-lg">{item.link}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2022 Retrospective Section */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">2022</h2>
          
          <div className="space-y-6">
            {retrospective2022.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-gray-400 font-bold min-w-0 flex-shrink-0 w-8">
                  {item.quarter}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                <div>
                  <span className="text-blue-400 cursor-pointer text-lg">{item.link}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificate;