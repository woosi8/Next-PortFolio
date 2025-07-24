"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skill = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "🟨🔷 7 Experienced years",
      skills: ["JS", "TS"]
    },
    {
      title: "⚛️⚡🔷 6 Experienced years", 
      skills: ["Node", "React", "Next"]
    },
    {
      title: "⚡🌊 5 Experienced years",
      skills: ["Swift", "Flutter"]
    }
  ];

  const otherSkills = [
    "⭐", "🅰️", "🔧", "📱", "⚡", "🌊"
  ];

  return (
    <section id="skill" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`bg-gray-900 rounded-lg p-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">STACK</h2>
          <p className="text-gray-400 mb-8">
            여행한이여도 척원대엠소프트 스마호서비스를 좋습니다. 학위 영일하앗 스마솜, 넘은 영행서앗 척원의셨습니다.
          </p>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="flex gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{category.title}</span>
                </div>
                <div className="text-gray-500">
                  &gt;
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            {otherSkills.map((skill, index) => (
              <div key={index} className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;