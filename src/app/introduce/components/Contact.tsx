"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import ContactEmailModal from "./ContactEmailModal";
import KakaoMap from "./KakaoMap";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, isVisible } = useScrollAnimation();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`rounded-lg p-8 transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">CONTACT</h2>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div
              className={`rounded-lg p-8 max-w-md w-full text-center ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                CHOI HYUCK
              </h3>

              <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-6"></div>

              <div
                className={`space-y-2 text-sm mb-6 ${
                  isDarkMode ? "text-gray-200" : "text-black"
                }`}
              >
                <p>
                  <span className="font-medium">Position |</span> FrontEnd
                  Developer
                </p>
                <p>
                  <span className="font-medium">Email |</span>{" "}
                  tmfvmehek@gmail.com
                </p>
              </div>

              <p
                className={`text-sm mb-6 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                유저에게 편리함을 주는 서비스를 만드는 개발자
              </p>

              <div className="flex justify-center gap-4">
                <div className=" h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <button 
                    className="p-10 text-white text-lg cursor-pointer"
                    onClick={() => setIsEmailModalOpen(true)}
                  >
                    📧 email 문의
                  </button>
                </div>
                {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">💼</span>
                </div>
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">💬</span>
                </div> */}
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <KakaoMap className="w-full" />
            </div>
          </div>
        </div>
      </div>
      
      <ContactEmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
