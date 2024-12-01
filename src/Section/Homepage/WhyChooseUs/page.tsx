'use client'
import Image from 'next/image'
import React, {useRef} from 'react'

export default function WhyChooseUs() {
  const videoRef = useRef<HTMLDivElement | null>(null)
  const playVideo = () => {
    if (videoRef.current) {
      const iframe = document.createElement('iframe')
      iframe.width = '560'
      iframe.height = '315'
      iframe.src = 'https://www.youtube.com/embed/o9fSbkdIGXM?autoplay=1'
      iframe.title = 'YouTube video player'
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      iframe.allowFullscreen = true
      iframe.className = 'absolute top-0 left-0 w-full h-full'
      videoRef.current.appendChild(iframe)
    }
  }
  return (
    <section className='w-full h-fit bg-background-grey py-[8.8rem] xsm:p-[3.75rem_1.25rem] flex flex-col items-center'>
      <h2 className='text-[3rem] xsm:text-[1.5625rem] font-bold leading-[1.3] text-black pb-[0.29rem]'>
        Why Choose Parkivia?
      </h2>
      <div className='bg-primary w-[2.6875rem] h-[3px]'></div>
      <p className='text-text-grey text-[1.25rem] text-center mb-[1.6rem] leading-[1.4] max-w-[26.8rem] mt-[2rem]'>
        We are the official providers of Airport parking You can't park closer!
      </p>
      <div className='w-[73.125rem] xsm:w-full h-[32rem] xsm:h-[9.1618rem] rounded-[0.5rem] xsm:rounded-[0.3125rem] relative overflow-hidden group flex justify-center items-center'>
        <input
          type='checkbox'
          id='video'
          className='overflow-hidden peer/video'
        />
        <label
          htmlFor='video'
          onClick={() => playVideo()}
          className='flex justify-center items-center size-[4.62rem] select-none bg-white relative z-[4] rounded-full cursor-pointer group/play overflow-hidden'
        >
          <div className='size-full bg-blue-300 opacity-0 transition-all duration-500 select-none group-hover/play:opacity-100 absolute top-0 left-0'></div>
          <svg
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative z-[4] size-[1.4rem]'
          >
            <path
              d='M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z'
              fill='#13c33e'
              className='transition-all duration-500  group-hover/play:fill-white'
            />
          </svg>
        </label>
        <Image
          src={'/images/video-cover2-copyright-1170x512.png'}
          width={1170}
          height={512}
          alt=''
          className='size-full select-none absolute top-0 left-0 object-cover z-[2]'
        />
        <div className='size-full absolute top-0 left-0 object-cover z-[3] opacity-0 bg-[rgb(0,0,0)] transition-all duration-500 group-hover:opacity-50 ytbVideo'></div>
        <div
          ref={videoRef}
          className='size-full bg-black absolute top-0 left-0 z-[1] peer-checked/video:z-[5]'
        ></div>
      </div>
      <div className='w-[73.125rem] xsm:w-full grid grid-cols-2 xsm:grid-cols-1 mt-[4.375rem] xsm:mt-[1.375rem]'>
        <div className='flex p-[1.8rem_2rem_3.05rem] xsm:p-[1.4625rem_1.625rem_3.44rem] relative group '>
          <div className='absolute z-0 top-0 left-0 right-0 bottom-0 bg-white transition-all duration-500 border-[0.7px] border-text-grey border-dashed opacity-0 group-hover:opacity-100 '></div>
          <svg
            fill='#000000'
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[3.2rem] h-[3.9375rem] xsm:size-[3.9375rem] mr-[2.5rem] my-auto relative z-[1]'
          >
            <path
              fill='#13c33e'
              d='M7.5,4a1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,7.79,1.29l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,7.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,11.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,15.5,4Zm2.42,11.62a.76.76,0,0,0-.09-.18l-.12-.15-.15-.12a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7.91.91,0,0,0,.33.22A1,1,0,0,0,17,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,17.92,15.62Zm1.84-4.51L18.4,7.05a3,3,0,0,0-2.84-2H8.44A3,3,0,0,0,5.6,7.05L4.24,11.11A3,3,0,0,0,2,14v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,2,0V21H18v1a1,1,0,0,0,2,0V20.82A3,3,0,0,0,22,18V14A3,3,0,0,0,19.76,11.11ZM7.49,7.68A1,1,0,0,1,8.44,7h7.12a1,1,0,0,1,1,.68L17.61,11H6.39ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-7-3H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-5.08.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18A.64.64,0,0,0,6,15.8,1.36,1.36,0,0,0,6,16a1,1,0,0,0,1.71.7A1,1,0,0,0,8,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,7.92,15.62Z'
            />
          </svg>
          <div className=' relative z-[1]'>
            <h3 className='text-[1.875rem] font-bold leading-[1.87] text-black transition-all duration-500 group-hover:text-primary'>
              Close And Handy
            </h3>
            <p className='mt-[0.2rem] text-text-grey text-[0.8rem]'>
              Park at the terminal – just a short walk and you are at your
              departure gate.
            </p>
          </div>
        </div>

        <div className='flex p-[1.8rem_2rem_3.05rem] relative group '>
          <div className='absolute z-0 top-0 left-0 right-0 bottom-0 bg-white transition-all duration-500 border-[0.7px] border-text-grey border-dashed opacity-0 group-hover:opacity-100 '></div>
          <svg
            fill='#000000'
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[3.2rem] h-[3.9375rem] xsm:size-[3.9375rem] mr-[2.5rem] my-auto relative z-[1]'
          >
            <path
              fill='#13c33e'
              d='M7.5,4a1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,7.79,1.29l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,7.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,11.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,15.5,4Zm2.42,11.62a.76.76,0,0,0-.09-.18l-.12-.15-.15-.12a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7.91.91,0,0,0,.33.22A1,1,0,0,0,17,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,17.92,15.62Zm1.84-4.51L18.4,7.05a3,3,0,0,0-2.84-2H8.44A3,3,0,0,0,5.6,7.05L4.24,11.11A3,3,0,0,0,2,14v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,2,0V21H18v1a1,1,0,0,0,2,0V20.82A3,3,0,0,0,22,18V14A3,3,0,0,0,19.76,11.11ZM7.49,7.68A1,1,0,0,1,8.44,7h7.12a1,1,0,0,1,1,.68L17.61,11H6.39ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-7-3H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-5.08.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18A.64.64,0,0,0,6,15.8,1.36,1.36,0,0,0,6,16a1,1,0,0,0,1.71.7A1,1,0,0,0,8,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,7.92,15.62Z'
            />
          </svg>
          <div className=' relative z-[1]'>
            <h3 className='text-[1.875rem] font-bold leading-[1.87] text-black transition-all duration-500 group-hover:text-primary'>
              Close And Handy
            </h3>
            <p className='mt-[0.2rem] text-text-grey text-[0.8rem]'>
              Park at the terminal – just a short walk and you are at your
              departure gate.
            </p>
          </div>
        </div>

        <div className='flex p-[1.8rem_2rem_3.05rem] relative group '>
          <div className='absolute z-0 top-0 left-0 right-0 bottom-0 bg-white transition-all duration-500 border-[0.7px] border-text-grey border-dashed opacity-0 group-hover:opacity-100 '></div>
          <svg
            fill='#000000'
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[3.2rem] h-[3.9375rem] xsm:size-[3.9375rem] mr-[2.5rem] my-auto relative z-[1]'
          >
            <path
              fill='#13c33e'
              d='M7.5,4a1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,7.79,1.29l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,7.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,11.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,15.5,4Zm2.42,11.62a.76.76,0,0,0-.09-.18l-.12-.15-.15-.12a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7.91.91,0,0,0,.33.22A1,1,0,0,0,17,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,17.92,15.62Zm1.84-4.51L18.4,7.05a3,3,0,0,0-2.84-2H8.44A3,3,0,0,0,5.6,7.05L4.24,11.11A3,3,0,0,0,2,14v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,2,0V21H18v1a1,1,0,0,0,2,0V20.82A3,3,0,0,0,22,18V14A3,3,0,0,0,19.76,11.11ZM7.49,7.68A1,1,0,0,1,8.44,7h7.12a1,1,0,0,1,1,.68L17.61,11H6.39ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-7-3H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-5.08.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18A.64.64,0,0,0,6,15.8,1.36,1.36,0,0,0,6,16a1,1,0,0,0,1.71.7A1,1,0,0,0,8,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,7.92,15.62Z'
            />
          </svg>
          <div className=' relative z-[1]'>
            <h3 className='text-[1.875rem] font-bold leading-[1.87] text-black transition-all duration-500 group-hover:text-primary'>
              Close And Handy
            </h3>
            <p className='mt-[0.2rem] text-text-grey text-[0.8rem]'>
              Park at the terminal – just a short walk and you are at your
              departure gate.
            </p>
          </div>
        </div>

        <div className='flex p-[1.8rem_2rem_3.05rem] relative group '>
          <div className='absolute z-0 top-0 left-0 right-0 bottom-0 bg-white transition-all duration-500 border-[0.7px] border-text-grey border-dashed opacity-0 group-hover:opacity-100 '></div>
          <svg
            fill='#000000'
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[3.2rem] h-[3.9375rem] xsm:size-[3.9375rem] mr-[2.5rem] my-auto relative z-[1]'
          >
            <path
              fill='#13c33e'
              d='M7.5,4a1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,7.79,1.29l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,7.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,11.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,15.5,4Zm2.42,11.62a.76.76,0,0,0-.09-.18l-.12-.15-.15-.12a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7.91.91,0,0,0,.33.22A1,1,0,0,0,17,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,17.92,15.62Zm1.84-4.51L18.4,7.05a3,3,0,0,0-2.84-2H8.44A3,3,0,0,0,5.6,7.05L4.24,11.11A3,3,0,0,0,2,14v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,2,0V21H18v1a1,1,0,0,0,2,0V20.82A3,3,0,0,0,22,18V14A3,3,0,0,0,19.76,11.11ZM7.49,7.68A1,1,0,0,1,8.44,7h7.12a1,1,0,0,1,1,.68L17.61,11H6.39ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-7-3H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-5.08.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18A.64.64,0,0,0,6,15.8,1.36,1.36,0,0,0,6,16a1,1,0,0,0,1.71.7A1,1,0,0,0,8,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,7.92,15.62Z'
            />
          </svg>
          <div className=' relative z-[1]'>
            <h3 className='text-[1.875rem] font-bold leading-[1.87] text-black transition-all duration-500 group-hover:text-primary'>
              Close And Handy
            </h3>
            <p className='mt-[0.2rem] text-text-grey text-[0.8rem]'>
              Park at the terminal – just a short walk and you are at your
              departure gate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
