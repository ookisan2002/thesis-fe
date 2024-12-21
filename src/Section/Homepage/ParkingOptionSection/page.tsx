'use client'

import CustomeButton from '@/components/CustomeButton/page'
import React from 'react'

export default function ParkingOptionSection({ticketTypeList}: any) {
  return (
    <section className='w-full relative h-[47.48rem] xsm:h-fit px-[3.4375rem] pt-[4.375rem] xsm:p-[3.75rem_2.38rem] flex flex-col items-center'>
      <h2 className='text-[3rem] xsm:text-[1.5625rem]  leading-[1.3] text-center font-bold relative z-[1]'>
        Parking Options and Rates
      </h2>
      <div className='bg-primary w-[2.6875rem] h-[3px] mt-[0.2rem] mb-[3rem] xsm:mb-[1.5rem] relative z-[1]'></div>
      <div className='w-full flex justify-center xsm:flex-col'>
        {ticketTypeList.map((it: any) => (
          <div
            key={it.id}
            className='flex flex-col p-[2.9rem_2rem] mx-[1rem] w-[22.75rem] xsm:w-[18.75rem] border border-dashed rounded-[5px] border-text-grey items-center'
          >
            <p className='text-primary text-[1.125rem]'>
              <span className='text-[2.75rem] '>{(it?.price || 0).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}</span>/{it.type}
            </p>
            <h5 className='text-[1.5rem] font-bold mt-[1.5rem]'>{it.name}</h5>
            <p className='text-center !line-clamp-3 text-[1rem] leading-[1.42rem] text-text-grey m-[0.65rem_0]'>
              This plan includes all of the services that come with a parking
              space!
            </p>
            <CustomeButton
              content='Learn More'
              buttonClass='mt-[1.8rem]'
            />
          </div>
        ))}

      </div>
    </section>
  )
}
