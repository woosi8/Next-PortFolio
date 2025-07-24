'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function Home() {
  const { isLoggedIn, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn) {
        router.push('/introduce')
      } else {
        router.push('/login')
      }
    }
  }, [isLoggedIn, isLoading, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-lg">페이지를 이동 중입니다...</div>
    </div>
  )
}
