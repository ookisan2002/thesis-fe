'use client'

import Card from '@/components/Card/page'
import React, {useEffect, useRef, useState} from 'react'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Calendar} from '@/components/ui/calendar'
import {DateRange} from 'react-day-picker'
import {Button} from '@/components/ui/button'
import {CalendarIcon} from 'lucide-react'
import {format} from 'date-fns'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {carParkInforParams} from '@/lib/constants'
import {renderPagination} from '@/lib/utils'

export default function CarParkInforTable() {
  const pagination = useRef(null)
  const [filterParams, setFilterParams] = useState<carParkInforParams>({
    code: '',
    email: '',
    page: 1,
    size: 3,
    dateRange: {
      from: undefined,
      to: undefined,
    },
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
    <div className='flex flex-col items-end'>
      <div className='flex my-[2.5rem] self-start'>
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
            Hành động
          </label>
          <Select>
            <SelectTrigger className='mt-[0.75rem] w-[13rem] h-[2.75rem] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] text-[#444] leading-[170%] bg-[#f4f7fe] font-medium p-[0.5rem_1.94rem]'>
              <SelectValue
                placeholder='Chọn hành động'
                className=''
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Hành động</SelectLabel>
                <SelectItem value='out'>Đi ra</SelectItem>
                <SelectItem value='in'>Đi vào</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='w-fit flex flex-col'>
          <label className='text-[1rem] text-black leading-[150%] font-bold'>
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
                <CalendarIcon className='[&_*]:stroke-[#aaa]' />
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
                // selected={filterParams?.dateRange}
                // onSelect={(e: DateRange | undefined)=>{setFilterParams((prevParams) => ({
                //   ...prevParams,
                //   dateRange: e,
                // }))}}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Card extra='w-full p-6'>
        <h3 className='text-xl font-bold text-[#1b254b]'>Xe trong bãi</h3>
        <table className='w-full mt-8'>
          <thead>
            <tr className='!border-b-[0.04375rem] !border-gray-400'>
              <th className='text-sm pb-2 font-bold text-[#a3aed0] text-left'>
                Biển
              </th>
              <th className='text-sm pb-2 font-bold text-[#a3aed0] text-left'>
                Chủ xe
              </th>
              <th className='text-sm pb-2 font-bold text-[#a3aed0] text-left'>
                Loại vé
              </th>
              <th className='text-sm pb-2 font-bold text-[#a3aed0] text-left'>
                Thời gian vào
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((it: number) => (
              <tr key={it}>
                <td className='text-sm py-3 font-medium text-[#1b254b]'>
                  12B-12345
                </td>
                <td className='text-sm py-3 font-medium text-[#1b254b]'>
                  dainam@gmail.com
                </td>
                <td className='py-3 text-md font-medium text-[#a3aed0]'>
                  Day
                </td>
                <td className='text-sm py-3 font-medium text-[#1b254b]'>
                  12/12/2024
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
