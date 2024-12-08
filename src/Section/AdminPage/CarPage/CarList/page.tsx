'use client'

import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import {CustomeCarCard} from '@/components/CustomeCard/page'
import {carFilterParams} from '@/lib/constants'
import {env} from '@/lib/environment'
import {
  debounce,
  getFetcher,
  renderPagination,
  toQueryString,
} from '@/lib/utils'
import React, {useContext, useEffect, useRef, useState} from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

export default function CarList({carList}: any) {
  const [filterParams, setFilterParams] = useState<carFilterParams>({
    code: '',
    email: '',
    page: carList?.currentPage || 1,
    size: 9,
  })
  const [userCarList, setUserCarList] = useState(carList?.items)
  const pagination = useRef(null)
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const debouncedSetFilterParamsForCode = debounce((value: string) => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      code: value,
    }))
  }, 500)

  const debouncedSetFilterParamsForEmail = debounce((value: string) => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      email: value,
    }))
  }, 500)
  useEffect(() => {
    if (pagination.current)
      renderPagination({
        totalPages: carList?.totalPage || 10,
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

  const {data, trigger, isMutating} = useSWRMutation(
    filterParams && `${env.API}/car?${toQueryString(filterParams)}`,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
  )

  useEffect(() => {
    trigger()
  }, [filterParams])

  useEffect(() => {
    if (data?.data?.items) setUserCarList(data?.data?.items)
  }, [data])
  return (
    <section className='col-span-2 xsm:col-span-3'>
      <div className='flex my-[2.5rem] flex-wrap'>
        <div className='mr-[1.5625rem] w-fit flex flex-col'>
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
            onChange={(e) => debouncedSetFilterParamsForCode(e.target.value)}
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] tablet:w-fit tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
        <div className='w-fit flex flex-col'>
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
            onChange={(e) => debouncedSetFilterParamsForEmail(e.target.value)}
            className='mt-[0.75rem] w-[13rem] h-[2.75rem] tablet:w-fit tablet:h-20 shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] rounded-[0.5rem] text-[1rem] tablet:text-[2rem] text-[#444] leading-[170%] font-medium p-[0.5rem_1.94rem]'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2 tablet:grid-cols-2 xsm:grid-cols-1 tablet:gap-6'>
        {userCarList?.map((it: any) => (
          <CustomeCarCard
            title={it.code}
            desRow1={`Name: ${it.name}`}
            desRow2={`Owner: ${it.user.fullname}`}
            desRow3={`Email: ${it.user.email}`}
            subDes={it.createdAt}
            key={it.id}
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
