'use client'

import Card from '@/components/Card/page'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Calendar} from '@/components/ui/calendar'
import {DateRange} from 'react-day-picker'
import {Button} from '@/components/ui/button'
import {CalendarIcon} from 'lucide-react'
import {format} from 'date-fns'
import {carParkInforParams} from '@/lib/constants'
import {
  formatDateToTimeStamp,
  getFetcher,
  renderPagination,
  toQueryString,
} from '@/lib/utils'
import {env} from '@/lib/environment'
import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import useSWRMutation from 'swr/mutation'

export default function CarParkInforTable() {
  const pagination = useRef(null)
  const [filterParams, setFilterParams] = useState<carParkInforParams>({
    code: '',
    email: '',
    page: 1,
    size: 9,
    dateRange: {
      from: undefined,
      to: undefined,
    },
  })
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context

  const {data, trigger} = useSWRMutation(
    `${env.API}/car/packing?${toQueryString({
      code: filterParams.code,
      email: filterParams.email,
      page: filterParams.page,
      size: 9,
      startDate: formatDateToTimeStamp(filterParams.dateRange?.from),
      endDate: formatDateToTimeStamp(filterParams.dateRange?.to),
    })}`,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
  )

  useEffect(() => {
    if (pagination.current)
      renderPagination({
        totalPages: data?.data?.totalPage || 1,
        currentPage: data?.data?.currentPage || 1,
        setCurrentPage: (i: number) => {
          setFilterParams((prevParams) => ({
            ...prevParams,
            page: i,
          }))
        },
        paginationControl: pagination.current,
      })
  }, [data])

  useEffect(() => {
    const debouncedTrigger = setTimeout(() => {
      trigger()
    }, 300)
    return () => clearTimeout(debouncedTrigger)
  }, [filterParams, trigger])

  return (
    <div className='flex flex-col items-end'>
      <div className='flex my-[2.5rem] self-start flex-wrap'>
        <div className='w-fit flex flex-col'>
          <label
            htmlFor='plate'
            className='text-[1rem] tablet:text-[2rem] text-black leading-[150%] font-bold'
          >
            Biển số
          </label>
          <input
            type='text'
            id='plate'
            placeholder='12A-12345'
            onChange={(e) =>
              setFilterParams((prevParams) => ({
                ...prevParams,
                code: e.target.value,
              }))
            }
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] tablet:w-fit tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
        <div className='mx-[1.5625rem] w-fit flex flex-col xsm:m-[1.5rem_0]'>
          <label
            htmlFor='owner'
            className='text-[1rem] tablet:text-[2rem] text-black leading-[150%] font-bold'
          >
            Chủ xe
          </label>
          <input
            type='email'
            id='owner'
            placeholder='abc@gmail.com'
            onChange={(e) => {
              setFilterParams((prevParams) => ({
                ...prevParams,
                email: e.target.value,
              }))
            }}
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] tablet:w-fit tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
        <div className='w-fit flex flex-col'>
          <label className='text-[1rem] tablet:text-[2rem] text-black leading-[150%] font-bold'>
            Ngày mua
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id='date'
                variant={'outline'}
                className={
                  'mt-[0.75rem] bg-[#f4f7fe] w-fit h-[2.75rem] tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
                }
              >
                <CalendarIcon className='[&_*]:stroke-[#aaa] tablet:!size-8' />
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
                onSelect={(e: DateRange | undefined) => {
                  setFilterParams((prevParams) => ({
                    ...prevParams,
                    dateRange: e,
                  }))
                }}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Card extra='w-full p-6 tablet:p-[2.5rem]'>
        <h3 className='text-xl tablet:text-[2.25rem] font-bold text-[#1b254b]'>
          Xe trong bãi
        </h3>
        <div className='w-full overflow-scroll no-scrollbar'>
          <table className='w-[100rem] lg:w-full mt-8'>
            <thead>
              <tr className='!border-b-[0.04375rem] !border-gray-400'>
                <th className='text-sm tablet:text-[1.5rem] pb-2 font-bold text-[#a3aed0] text-left'>
                  Biển
                </th>
                <th className='text-sm tablet:text-[1.5rem] pb-2 font-bold text-[#a3aed0] text-left'>
                  Chủ xe
                </th>
                <th className='text-sm tablet:text-[1.5rem] pb-2 font-bold text-[#a3aed0] text-left'>
                  Loại vé
                </th>
                <th className='text-sm tablet:text-[1.5rem] pb-2 font-bold text-[#a3aed0] text-left'>
                  Thời gian vào
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {[1, 2, 3, 4, 5, 6].map((it: number) => (
                <tr key={it}>
                  <td className='text-sm tablet:text-[1.5rem] py-3 font-medium text-[#1b254b]'>
                    12B-12345
                  </td>
                  <td className='text-sm tablet:text-[1.5rem] py-3 font-medium text-[#1b254b]'>
                    dainam@gmail.com
                  </td>
                  <td className='py-3 text-md tablet:text-[1.5rem] font-medium text-[#a3aed0]'>
                    Day
                  </td>
                  <td className='text-sm tablet:text-[1.5rem] py-3 font-medium text-[#1b254b]'>
                    12/12/2024
                  </td>
                </tr>
              ))} */}
              {(data?.data?.totalItem !== 0 && data?.data?.totalItem
                ? data?.data?.items
                : []
              ).map((it: any) => (
                <tr key={it}>
                  <td className='text-sm tablet:text-[1.5rem] py-3 font-medium text-[#1b254b]'>
                    {it?.car?.code}
                  </td>
                  <td className='text-sm tablet:text-[1.5rem] py-3 font-medium text-[#1b254b]'>
                    {it?.car?.user?.email}
                  </td>
                  <td className='py-3 text-md tablet:text-[1.5rem] font-medium text-[#a3aed0]'>
                    {it?.ticketType?.name}
                  </td>
                  <td className='text-sm tablet:text-[1.5rem] py-3 font-medium text-[#1b254b]'>
                    {it?.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <div
        ref={pagination}
        className='wrap_pagination_news'
      >
        <div id='pagination-controls'></div>
      </div>
    </div>
  )
}
