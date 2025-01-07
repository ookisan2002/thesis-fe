'use client'
import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import {CustomeTicketCard} from '@/components/CustomeCard/page'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {ticketFilterParams} from '@/lib/constants'
import {env} from '@/lib/environment'
import {
  formatDate,
  formatDateToTimeStamp,
  getFetcher,
  renderPagination,
  toQueryString,
} from '@/lib/utils'
import {format} from 'date-fns'
import {CalendarIcon} from 'lucide-react'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {DateRange} from 'react-day-picker'
import useSWRMutation from 'swr/mutation'

export default function TicketTableSection({ticketList}: any) {
  const pagination = useRef(null)
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const [userCarList, setUserCarList] = useState(ticketList?.items)
  const [filterParams, setFilterParams] = useState<ticketFilterParams>({
    code: '',
    email: '',
    page: ticketList?.currentPage || 1,
    size: 9,
    dateRange: {
      from: undefined,
      to: undefined,
    },
  })

  const {data, trigger} = useSWRMutation(
    `${env.API}/ticket?${toQueryString({
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
    if (data) setUserCarList(data?.data?.items)
  }, [data])

  useEffect(() => {
    if (pagination.current)
      renderPagination({
        totalPages: data?.data?.totalPage || ticketList?.totalPage || 1,
        currentPage: filterParams.page,
        setCurrentPage: (i: number) => {
          setFilterParams((prevParams) => ({
            ...prevParams,
            page: i,
          }))
        },
        paginationControl: pagination.current,
      })
  }, [filterParams.page, ticketList?.totalPage])

  useEffect(() => {
    const debouncedTrigger = setTimeout(() => {
      trigger()
    }, 300)
    return () => clearTimeout(debouncedTrigger)
  }, [filterParams, trigger])

  return (
    <section className='w-full'>
      <div className='flex my-[2.5rem] flex-wrap'>
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
        <div className='mx-[1.5625rem] xsm:m-[1rem_0] w-fit flex flex-col'>
          <label
            htmlFor='owner'
            className='text-[1rem] tablet:text-[2rem] text-black leading-[150%] font-bold'
          >
            Chủ xe
          </label>
          <input
            type='email'
            id='owner'
            onChange={(e) =>
              setFilterParams((prevParams) => ({
                ...prevParams,
                email: e.target.value,
              }))
            }
            placeholder='abc@gmail.com'
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] tablet:w-fit tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
        <div className='w-fit flex flex-col'>
          <label
            htmlFor='carName'
            className='text-[1rem] tablet:text-[2rem] text-black leading-[150%] font-bold'
          >
            Ngày mua
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id='date'
                variant={'outline'}
                className={
                  'mt-[0.75rem] bg-[#f4f7fe] w-fit h-[2.75rem] tablet:w-fit tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
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
      <div className='grid grid-cols-3 gap-2 tablet:gap-6 xsm:grid-cols-1 tablet:grid-cols-2'>
        {userCarList?.map((it: any) => (
          <CustomeTicketCard
            title={it?.car?.code}
            desRow1={`Giá: ${(it?.price || 0).toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}`}
            desRow2={`Loại vé: ${it?.ticketType?.name}`}
            desRow3={`Email: ${it?.car?.user?.email}`}
            subDes={formatDate(it?.createdAt)}
            key={it?.id}
          />
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
