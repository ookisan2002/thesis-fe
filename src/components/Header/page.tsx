'use client'

import {Menu, X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
import {AccountContext, AccountContextType} from '../ContextProvider/page'

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  return (
    <>
      <div className='sticky top-0 w-full z-[42] flex py-2 px-12 xsm:px-4 items-center lg:shadow-md bg-white'>
        <div className='flex items-center h-fit'>
          <Image
            src='https://i.pinimg.com/564x/2b/31/f2/2b31f25a2616c2dff313afe4adcf149b.jpg'
            width={40}
            height={40}
            alt=''
            className='h-[3rem] w-[3rem] xsm:size-9 rounded-full object-cover'
          />
          <Link
            href='#'
            className='cursor-pointer text-[2.5rem] xsm:text-[2rem] font-bold text-black ml-3'
          >
            Bach Dai
          </Link>
        </div>
        <div className='flex xsm:hidden items-center ml-[4rem]'>
          <Link
            href='/#home'
            className='leading-normal font-bold hover:text-primary text-text-grey py-7 px-4 uppercase'
          >
            HOME
          </Link>
          <Link
            href='/#aboutMe'
            className='leading-normal font-bold hover:text-primary text-text-grey py-7 px-4 uppercase'
          >
            ABOUT
          </Link>
          <Link
            href='/buy'
            className='leading-normal font-bold hover:text-primary text-text-grey py-7 px-4 uppercase'
          >
            Buy ticket
          </Link>
          <Link
            href='/#contact'
            className='leading-normal font-bold hover:text-primary text-text-grey py-7 px-4 uppercase'
          >
            CONTACT
          </Link>
          {value.admin && (
            <Link
              href='/admin/dashboard'
              className='leading-normal font-bold hover:text-primary text-text-grey py-7 px-4 uppercase'
            >
              ADMIN
            </Link>
          )}
        </div>

        <div onClick={toggleNavbar} className='flex sm:hidden items-center ml-auto'>
            {mobileDrawerOpen ? <X className='size-[2rem]' /> : <Menu className='size-[2rem]' />}
        </div>
      </div>
      <div
        className={`fixed z-50 left-0 top-[3.81rem] w-full bg-white transition-all ${
          mobileDrawerOpen ? ' opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link
          href='/'
          className='leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4'
        >
          HOME
        </Link>
        <Link
          href='/'
          className='leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4'
        >
          ABOUT
        </Link>
        <Link
          href='/buy'
          className='leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4 uppercase'
        >
          Buy ticket
        </Link>
        <Link
          href='/'
          className='leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4'
        >
          CONTACT
        </Link>
        {value.admin && (
          <Link
            href='/admin/dashboard'
            className='leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4'
          >
            ADMIN
          </Link>
        )}
      </div>
    </>
  )
}
