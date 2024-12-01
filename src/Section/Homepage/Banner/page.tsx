'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import './styles.css'

export default function Banner() {
  return (
    <section className="h-[38rem] xsm:h-[10.4375rem] w-full banner">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-[38rem] xsm:h-[10.4375rem] w-full"
      >
        <SwiperSlide className="h-[38rem] xsm:h-[10.4375rem] w-[100vw]">
          <div className="relative w-full h-full slide_content">
            <Image
              src={'/images/s1.jpg'}
              width={1600}
              height={511}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className='absolute top-[8rem] left-[19rem] xsm:top-[2.6875rem] xsm:left-[1.6875rem] text-white'>
              <h3 className=" text-[6rem] xsm:text-[1.5rem] font-[700] w-[32.6215rem] xsm:w-[8.96rem] leading-[136%] xsm:leading-[1.75rem] capitalize">You can&apos;t park closer</h3>
              <div className='bg-white h-[0.1rem] w-[2rem] xsm:w-[2.6875rem] xsm:h-[0.1875rem] seperate'></div>
              <p className="text-[1.5rem] mt-[0.8rem] xsm:hidden">
                instantly book your space today.
                <br /> trusted by millions
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[38rem] w-[100vw] xsm:h-[10.4375rem]">
          <div className="relative w-full h-full slide_content">
            <Image
              src={'/images/s2.jpg'}
              width={1600}
              height={511}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className='absolute top-[8rem] left-[19rem] xsm:top-[2.6875rem] xsm:left-[1.6875rem] text-white'>
              <h3 className="text-[6rem] xsm:text-[1.5rem] font-[700] w-[32.6215rem] xsm:w-[8.96rem] leading-[136%] xsm:leading-[1.75rem] capitalize">You can&apos;t park closer</h3>
              <div className='bg-white h-[0.1rem] w-[2rem] xsm:w-[2.6875rem] xsm:h-[0.1875rem] seperate'></div>
              <p className="text-[1.5rem] mt-[0.8rem] xsm:hidden">
                instantly book your space today.
                <br /> trusted by millions
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[38rem] w-[100vw] xsm:h-[10.4375rem]">
          <div className="relative w-full h-full slide_content">
            <Image
              src={'/images/s3.jpg'}
              width={1600}
              height={511}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className='absolute top-[8rem] left-[19rem] xsm:top-[2.6875rem] xsm:left-[1.6875rem] text-white'>
              <h3 className="text-[6rem] xsm:text-[1.5rem] font-[700] w-[32.6215rem] xsm:w-[8.96rem] leading-[136%] xsm:leading-[1.75rem] capitalize">You can&apos;t park closer</h3>
              <div className='bg-white h-[0.1rem] w-[2rem] xsm:w-[2.6875rem] xsm:h-[0.1875rem] seperate'></div>
              <p className="text-[1.5rem] mt-[0.8rem] xsm:hidden">
                instantly book your space today.
                <br /> trusted by millions
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
