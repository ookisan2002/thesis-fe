'use client'

import AdminAddCarDialog from '@/components/AdminAddCarDialog/page'
import CarActionHistoryTable from '@/components/CarActionHistoryTable/page'
import Card from '@/components/Card/page'
import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import {CustomeCarCard} from '@/components/CustomeCard/page'
import {carFilterParams} from '@/lib/constants'
import {env} from '@/lib/environment'
import {
  debounce,
  formatDate,
  getFetcher,
  renderPagination,
  toQueryString,
} from '@/lib/utils'
import {ChevronDown} from 'lucide-react'
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
  const [openModal, setOpenModal] = useState<string>('')
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
  }, [carList, filterParams.page])

  const {data} = useSWR(
    filterParams && `${env.API}/car?${toQueryString(filterParams)}`,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
      {
        refreshInterval: 1000,
        revalidateOnFocus: true,
        dedupingInterval: 1000,
      }
  )

  useEffect(() => {
    if (data?.data?.items) setUserCarList(data?.data?.items)
  }, [data])
  return (
    <>
      {openModal === 'ADD_CAR' && (
        <AdminAddCarDialog closeModal={setOpenModal} />
      )}
      {openModal !== 'ADD_CAR' && openModal.length > 0 && (
        <div className='bg-[#64748b4d] fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center'>
          <Card extra='p-6 relative'>
            {/* <X
                className='h-4 w-4 absolute top-6 right-6 cursor-pointer'
                onClick={() => setOpenModal('')}
              /> */}
            <h4 className='text-lg font-semibold leading-none tracking-tight'>
              Chi tiết hoạt động của xe
            </h4>
            <p className='text-sm text-muted-foreground mb-4'>
              Xem thông tin ra vào bãi của xe đã đăng kí
            </p>
            <CarActionHistoryTable
              carInforId={openModal}
              setCarInforId={setOpenModal}
            />
          </Card>
        </div>
      )}
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
          <div
            onClick={() => setOpenModal('ADD_CAR')}
            className='flex justify-center items-center p-3 bg-primary text-white cursor-pointer rounded-md h-[2.7rem] self-end ml-auto'
          >
            Thêm xe
            <ChevronDown className='ml-2' />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2 tablet:grid-cols-2 xsm:grid-cols-1 tablet:gap-6'>
          {userCarList?.map((it: any) => (
            <CustomeCarCard
              title={it.code}
              desRow1={`Name: ${it.name}`}
              desRow2={`Owner: ${it.user.fullname}`}
              desRow3={`Email: ${it.user.email}`}
              subDes={formatDate(it.createdAt)}
              key={it.id}
              getDetail={setOpenModal}
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
    </>
  )
}
