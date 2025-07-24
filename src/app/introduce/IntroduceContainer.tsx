"use client";

import { DarkModeProvider } from "@/common/DarkModeProvider";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import IntroducePage from "./components/IntroducePage";

const IntroduceContainer = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-lg">로딩중...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <DarkModeProvider>
      <IntroducePage />
    </DarkModeProvider>
  );
};

export default IntroduceContainer;
