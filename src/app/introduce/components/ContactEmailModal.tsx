"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

interface ContactEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactEmailModal = ({ isOpen, onClose }: ContactEmailModalProps) => {
  const { isDarkMode } = useDarkMode();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // 폼 초기화
          setFormData({
            name: "",
            email: "",
            title: "",
            message: "",
          });
          onClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`max-w-2xl w-full rounded-lg p-6 max-h-[80vh] overflow-y-auto ${
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
              📧 이메일 문의
            </h1>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              언제든지 연락주세요!
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

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              placeholder="성함을 입력해주세요"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              placeholder="이메일 주소를 입력해주세요"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              placeholder="문의 제목을 입력해주세요"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              placeholder="문의 내용을 자세히 작성해주세요"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`px-6 py-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-gray-600 text-white hover:bg-gray-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              전송
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactEmailModal;
