'use client'

import React, {useContext, useEffect, useRef, useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import './styles.css'
import CustomTable from '../CustomTable/page'
import {ticketFilterParams} from '@/lib/constants'
import useSWR from 'swr'
import {
  formatDate,
  getFetcher,
  renderPagination,
  toQueryString,
} from '@/lib/utils'
import {AccountContext, AccountContextType} from '../ContextProvider/page'
import {env} from '@/lib/environment'

export type Ticket = {
  id: string
  car: string
  status: 'Active' | 'Expired'
  price: string
  validDate: string
  expiredDate: string
}

export const data: Ticket[] = [
  {
    id: 'm5gr84i9',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i8',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i7',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i6',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i5',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i4',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i3',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i7',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i6',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i5',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i4',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
  {
    id: 'm5gr84i3',
    car: 'ABC-012 09123',
    status: 'Active',
    price: '30$',
    validDate: '20/01/2002',
    expiredDate: '31/01/2002',
  },
]

export default function TicketDialog({children}: {children: React.ReactNode}) {
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const pagination = useRef(null)
  const [userTicketList, setUserTicketList] = useState<any>({
    totalPage: 10,
    currentPage: 1,
    items: [],
  })
  const [filterParams, setFilterParams] = useState<ticketFilterParams>({
    code: '',
    email: '',
    page: 1,
    size: 3,
    dateRange: undefined,
  })

  const {data} = useSWR(
    value.token
      ? `${env.API}/ticket/user?${toQueryString({
          code: filterParams.code,
          page: filterParams.page,
          size: 9,
        })}`
      : null,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  useEffect(() => {
    if (pagination.current) {
      renderPagination({
        totalPages: userTicketList?.totalPage || 10,
        currentPage: userTicketList?.currentPage || 1,
        setCurrentPage: (i: number) => {
          setFilterParams((prevParams) => ({
            ...prevParams,
            page: i,
          }))
        },
        paginationControl: pagination.current,
      })
    }
  }, [userTicketList])
  useEffect(() => {
    setUserTicketList({
      totalPage: data?.data?.totalPage || 10,
      currentPage: data?.data?.currentPage || 1,
      items: data?.data?.items || [],
    })
  }, [data])

  //   useEffect(() => {
  //     clearTimeout(searchTimeOut)
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     searchTimeOut = setTimeout(() => {
  //       setSearchParamsDebounce(searchParams)
  //     }, 900)
  //     return () => clearTimeout(searchTimeOut)
  //   }, [searchParams])

  //   const onSubmit = (data: any) => {
  //     console.log('Form data:', data)
  //   }

  // useEffect(() => {
  //   if (carList?.data?.items.length > 0 && carList?.data?.items.length) {
  //     setuserTicketList((prevParams: any) => ({
  //       ...prevParams,
  //       totalPage: carList?.data?.totalPage || 10,
  //       currentPage: carList?.data?.currentPage || 1,
  //       items: carList?.data?.items || [],
  //     }))
  //   }
  // }, [carList])
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className='cursor-pointer'
      >
        {children}
      </DialogTrigger>
      <DialogContent className='max-w-[unset] min-w-[47rem] w-fit'>
        <DialogHeader>
          <DialogTitle>Bought ticket</DialogTitle>
          <DialogDescription>
            All ticket you recently bought in 3 month.
          </DialogDescription>
        </DialogHeader>
        <CustomTable
          currentPage={userTicketList.totalPage}
          totalPage={userTicketList.currentPage}
          setCurrentPage={(i: number) => {
            setFilterParams((prevParams) => ({
              ...prevParams,
              page: i,
            }))
          }}
          colRender={() => (
            <tr>
              <th
                scope='col'
                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
              >
                Xe
              </th>
              <th
                scope='col'
                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
              >
                Loại vé
              </th>
              <th
                scope='col'
                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
              >
                Ngày mua
              </th>
              <th
                scope='col'
                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
              >
                Ngày hết hạn
              </th>
              <th
                scope='col'
                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
              >
                Giá
              </th>
            </tr>
          )}
          rowData={userTicketList.items.map((it: any) => {
            return {
              content: it,
              rowRender: (obj: any) => (
                <tr
                  key={it?.id}
                  className='hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {obj.car.code}
                  </td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {obj.name}
                  </td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {obj.startDate ? formatDate(it.startDate) : null}
                    {/* {obj.startDate} */}
                  </td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {obj.endDate ? formatDate(it.endDate) : null}
                    {/* {obj.endDate} */}
                  </td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {obj.price.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </td>
                </tr>
              ),
            }
          })}
        />
      </DialogContent>
    </Dialog>
  )
}
