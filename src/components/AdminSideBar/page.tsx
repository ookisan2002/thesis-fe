'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useCallback, useContext, useEffect} from 'react'
import {
  AlignJustify,
  Car,
  House,
  LogOut,
  SquareParking,
  TicketCheck,
} from 'lucide-react'
import {usePathname} from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import { logout } from '@/lib/utils'

export default function AdminSideBar() {
  const pathname = usePathname()
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName)
    },
    [pathname],
  )
  useEffect(() => {
    if (!value || !value?.admin) {
      window.location.href = '/'
    }
  }, [value])
  return (
    <>
      <label htmlFor='admin_nav' className='lg:hidden fixed top-16 right-16 backdrop-blur-xl p-4 xsm:p-2 rounded-full xsm:top-[1rem] xsm:right-[1rem] z-50'>
        <AlignJustify className='size-10 xsm:size-[1.5rem]'/>
      </label>
      <input
        type='checkbox'
        id='admin_nav'
        className='hidden peer/nav'
      />
      <nav
        className={
          'fixed left-0 top-0 h-screen w-[310px] bg-white shadow-2xl border-r border-gray-200 flex flex-col z-50 transition-all lg:!translate-x-0 xlg:translate-x-[-113%] xlg:peer-checked/nav:translate-x-0'
        }
      >
        <div
          className={
            'w-full f-fit flex items-center justify-start py-12 px-14 xsm:p-[2rem_1.5rem] border-b border-gray-200 mb-7'
          }
        >
          <Image
            src='https://i.pinimg.com/564x/2b/31/f2/2b31f25a2616c2dff313afe4adcf149b.jpg'
            width={40}
            height={40}
            alt=''
            className='h-[3rem] w-[3rem] tablet:size-[6rem] rounded-full object-cover'
          />
          <Link
            href='/'
            className='cursor-pointer text-[1.5rem] tablet:text-[3.25rem] xsm:text-[1.625rem] font-bold text-black ml-3 tracking-wider'
          >
            Bach Dai
          </Link>
        </div>
        <div className={'w-full h-hit '}>
          <div
            className={`flex items-center justify-start py-[0.375rem] pl-8 tablet:pl-[4rem] ${
              activeRoute('dashboard') &&
              ' border-r-[0.25rem] border-r-[#422afb]'
            }`}
          >
            <House
              className={`size-[1.5rem] tablet:size-[3rem] ${
                activeRoute('dashboard')
                  ? ' [&_*]:stroke-[#422afb]'
                  : '[&_*]:stroke-[#a3aed0]'
              }`}
            />
            <Link
              href='/admin/dashboard'
              className={`text-[1rem] tablet:text-[3.25rem] tracking-wider leading-1 ml-4 tablet:ml-8 flex font-bold dark:text-white ${
                activeRoute('dashboard') ? 'text-black' : 'text-[#a3aed0]'
              }`}
            >
              Dashboard
            </Link>
          </div>

          <div
            className={`flex items-center justify-start py-[0.375rem] pl-8 tablet:pl-[4rem] ${
              activeRoute('car') && ' border-r-[0.25rem] border-r-[#422afb]'
            }`}
          >
            <Car
              className={`size-[1.5rem] tablet:size-[3rem] ${
                activeRoute('car')
                  ? ' [&_*]:stroke-[#422afb]'
                  : '[&_*]:stroke-[#a3aed0]'
              }`}
            />
            <Link
              href='/admin/car'
              className={`text-[1rem] tablet:text-[3.25rem] tracking-wider leading-1 ml-4 tablet:ml-8 flex font-bold dark:text-white ${
                activeRoute('car') ? 'text-black' : 'text-[#a3aed0]'
              }`}
            >
              Car
            </Link>
          </div>

          <div
            className={`flex items-center justify-start py-[0.375rem] pl-8 tablet:pl-[4rem] ${
              activeRoute('ticket') && ' border-r-[0.25rem] border-r-[#422afb]'
            }`}
          >
            <TicketCheck
              className={`size-[1.5rem] tablet:size-[3rem] ${
                activeRoute('ticket')
                  ? ' [&_*]:stroke-[#422afb]'
                  : '[&_*]:stroke-[#a3aed0]'
              }`}
            />
            <Link
              href='/admin/ticket'
              className={`text-[1rem] tablet:text-[3.25rem] tracking-wider leading-1 ml-4 tablet:ml-8 flex font-bold dark:text-white ${
                activeRoute('ticket') ? 'text-black' : 'text-[#a3aed0]'
              }`}
            >
              Ticket
            </Link>
          </div>

          <div
            className={`flex items-center justify-start py-[0.375rem] pl-8 tablet:pl-[4rem] ${
              activeRoute('park') && ' border-r-[0.25rem] border-r-[#422afb]'
            }`}
          >
            <SquareParking
              className={`size-[1.5rem] tablet:size-[3rem] ${
                activeRoute('park')
                  ? ' [&_*]:stroke-[#422afb]'
                  : '[&_*]:stroke-[#a3aed0]'
              }`}
            />
            <Link
              href='/admin/park'
              className={`text-[1rem] tablet:text-[3.25rem] tracking-wider leading-1 ml-4 tablet:ml-8 flex font-bold dark:text-white ${
                activeRoute('park') ? 'text-black' : 'text-[#a3aed0]'
              }`}
            >
              Car park
            </Link>
          </div>
        </div>
        <div className={'w-full h-hit p-4 mt-auto'}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={
                  'w-full h-fit flex items-center p-3 hover:bg-gray-100 rounded-2xl'
                }
              >
                <div
                  className={
                    'rounded-full size-[2rem] tablet:size-[5rem] tablet:text-[2rem] text-white bg-black flex items-center justify-center'
                  }
                >
                  {value?.fullname[0]}
                </div>
                <div
                  className={
                    'ml-3 tablet:ml-6 flex flex-col items-start flex-1'
                  }
                >
                  <p
                    className={
                      'text-[1.25rem] tablet:text-[2rem] text-black font-semibold'
                    }
                  >
                    {value?.fullname}
                  </p>
                  <p className={'text-text-grey tablet:text-[2rem]'}>
                    {value?.email}
                  </p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='tablet:w-[20rem] tablet:p-4'>
              <DropdownMenuLabel className='tablet:text-[2.5rem] mb-3'>
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout()}>
                <LogOut className='tablet:!size-9' />
                <span className='tablet:text-[2.5rem]'>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  )
}
