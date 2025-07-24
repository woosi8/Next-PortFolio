"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createContainer } from "unstated-next";

const LoginContainer = createContainer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("입력된 아이디:", email);
    console.log("입력된 비밀번호:", password);

    if (email === "qwer" && password === "9999") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/introduce");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  };
});

export default LoginContainer;
