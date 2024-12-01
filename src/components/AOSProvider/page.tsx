'use client'
import Aos from 'aos'
import React, {useEffect} from 'react'
import 'aos/dist/aos.css'

export default function AOSProvider({children}:{children: React.ReactNode}) {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000, // Đặt thời gian animation
    })
  }, [])
  return <>{children}</>
}
