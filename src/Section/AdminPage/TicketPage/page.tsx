'use client'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {carFilterParams, ticketFilterParams} from '@/lib/constants'
import {renderPagination} from '@/lib/utils'
import {addDays, format} from 'date-fns'
import {CalendarIcon, Car, DollarSign, Mail, Tag, User} from 'lucide-react'
import React, {useEffect, useRef, useState} from 'react'
import {DateRange} from 'react-day-picker'

export default function TicketTableSection({ticketList}: any) {
  const pagination = useRef(null)
  const [userCarList, setUserCarList] = useState(ticketList?.items)
  const [filterParams, setFilterParams] = useState<ticketFilterParams>({
    code: '',
    email: '',
    page: 1,
    size: 3,
    dateRange: {
      from: undefined,
      to: undefined,
    }
  })

  useEffect(() => {
    if (pagination.current)
      renderPagination({
        totalPages: 10,
        currentPage: filterParams.page,
        setCurrentPage: (i: number) => {
          setFilterParams((prevParams) => ({
            ...prevParams,
            page: i,
          }))
        },
        paginationControl: pagination.current,
      })
  }, [filterParams.page])
  return (
    <section className='w-full'>
      <div className='flex my-[2.5rem]'>
        <div className='w-fit flex flex-col'>
          <label
            htmlFor='plate'
            className='text-[1rem] text-black leading-[150%] font-bold'
          >
            Biển số
          </label>
          <input
            type='text'
            id='plate'
            placeholder='12A-12345'
            // onChange={(e) =>
            //   setFilterParams((prevParams) => ({
            //     ...prevParams,
            //     code: e.target.value,
            //   }))
            // }
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
        <div className='mx-[1.5625rem] w-fit flex flex-col'>
          <label
            htmlFor='owner'
            className='text-[1rem] text-black leading-[150%] font-bold'
          >
            Chủ xe
          </label>
          <input
            type='email'
            id='owner'
            placeholder='abc@gmail.com'
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
        <div className='w-fit flex flex-col'>
          <label
            htmlFor='carName'
            className='text-[1rem] text-black leading-[150%] font-bold'
          >
            Ngày mua
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id='date'
                variant={'outline'}
                className={
                  'mt-[0.75rem] bg-[#f4f7fe] w-fit h-[2.75rem] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
                }
              >
                <CalendarIcon className='[&_*]:stroke-[#aaa]'/>
                {filterParams?.dateRange?.from ? (
                  filterParams?.dateRange.to ? (
                    <>
                      {format(filterParams?.dateRange.from, 'LLL dd, y')} -{' '}
                      {format(filterParams?.dateRange.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(filterParams?.dateRange.from, 'LLL dd, y')
                  )
                ) : (
                  <span className='text-[#aaa]'>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className='w-auto p-0'
              align='start'
            >
              <Calendar
                initialFocus
                mode='range'
                defaultMonth={new Date()}
                selected={filterParams?.dateRange}
                onSelect={(e: DateRange | undefined)=>{setFilterParams((prevParams) => ({
                  ...prevParams,
                  dateRange: e,
                }))}}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {[1, 2, 3, 4, 5, 6, 8, 9].map((it, i: number) => (
          <div
            key={i}
            className='p-[1.88rem] h-[19.5625rem] bg-white shadow-[6px_0px_39.768px_0px_rgba(0,0,0,0.05)] rounded-[0.9375rem]'
          >
            <h5 className='text-[1.25rem] font-semibold leading-[150%] mb-[2.06rem]'>
              12B-122345
            </h5>
            <div className='flex'>
              <DollarSign className='[&_*]:stroke-primary size-[1.375rem] mr-[0.75rem]' />
              <p className='text-[0.9375rem] leading-[160%] font-normal text-[#444]'>
                Giá: $123
              </p>
            </div>
            <div className='flex my-[0.62rem]'>
              <Tag className='[&_*]:stroke-primary size-[1.375rem] mr-[0.75rem]' />
              <p className='text-[0.9375rem] leading-[160%] font-normal text-[#444]'>
                Loại vé: Tháng
              </p>
            </div>
            <div className='flex'>
              <Mail className='[&_*]:stroke-primary size-[1.375rem] mr-[0.75rem]' />
              <p className='text-[0.9375rem] leading-[160%] font-normal text-[#444]'>
                Email: dai@123gmai.com
              </p>
            </div>
            <div className='w-full flex justify-between pt-[1.37rem] mt-[1.31rem] border-t-[0.04375rem] border-t-[#44444480]'>
              <p className='text-[#828282] text-[0.9375rem] leading-[160%] font-semibold'>
                Ngày đăng kí: <br />
                6/7/2023
              </p>
              <button className='size-[3.4375rem] bg-[#444] text-white flex justify-center items-center rounded-full leading-[160%] text-[0.75rem] font-normal'>
                Chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={pagination}
        className='wrap_pagination_news'
      >
        <div id='pagination-controls'></div>
      </div>
    </section>
  )
}
