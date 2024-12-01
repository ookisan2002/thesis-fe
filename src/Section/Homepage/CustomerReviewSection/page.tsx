'use client'
import Image from 'next/image'
import React from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function CustomerReviewSection() {
  return (
    <section className='w-full relative h-[55.09rem] xsm:h-[36.1875rem] px-[3.4375rem] pt-[8.8rem] xsm:p-[3.75rem_0] flex flex-col items-center'>
      <Image
        src={'/images/bg_map.jpg'}
        width={1600}
        height={500}
        alt=''
        className='size-full object-cover absolute top-0 left-0 z-0'
      />
      <h2 className='text-[3rem] xsm:text-[1.5625rem] w-[24.1625rem] xsm:w-[17.6875rem] text-white leading-[1.3] text-center font-bold relative z-[1]'>
        What Our Customers Say
      </h2>
      <div className='bg-primary w-[2.6875rem] h-[3px] mt-[0.2rem] mb-[3rem] relative z-[1]'></div>
      <div className='w-full '>
        <Swiper
          slidesPerView={3}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper w-full'
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((it: number) => (
            <SwiperSlide
              key={it}
              className='!flex justify-center'
            >
              <div className='p-[2rem_4rem_0] w-[29.1625rem] tablet:w-[44.1625rem] xsm:w-[20.93rem] relative z-[1] flex flex-col justify-center items-center'>
                <div className='bg-white w-full absolute top-0 left-0 h-[19rem]'></div>
                <svg
                  fill='#000000'
                  width='800px'
                  height='800px'
                  viewBox='0 0 32 32'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-[2.5rem] relative z-[1]'
                >
                  <path
                    fill='#13c33e'
                    d='M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z'
                  ></path>
                </svg>
                <p className='text-[1rem] text-center my-[1rem] !line-clamp-3 overflow-hidden text-text-grey relative z-[1]'>
                  “Everyone I know really likes Parkivia services. Thank you for
                  effective and expedient help as well as easy booking! Stay
                  awesome!”
                </p>
                <h3 className='text-[1.5rem] text-center relative z-[1]'>
                  Jason Lee
                </h3>
                <p className='text-[1rem] text-center mb-[2rem] text-text-grey relative z-[1]'>
                  New York
                </p>
                <Image
                  src={'/images/1test-copyright-90x90.jpg'}
                  width={85}
                  height={85}
                  alt=''
                  className='size-[5.3125rem] rounded-full object-cover relative z-[1]'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='custom-pagination relative w-full mt-12 flex justify-center [&_span]:mx-[0.4rem] [&_.swiper-pagination-bullet-active]:!bg-primary'></div>
      </div>
    </section>
  )
}
