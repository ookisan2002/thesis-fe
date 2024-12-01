'use client'

import React, {useEffect, useState} from 'react'
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
import { ticketFilterParams } from '@/lib/constants'

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
  const [userCarList, setUserCarList] = useState<any>({
    totalPage: 10,
    currentPage: 1,
    items: [],
  })
  const [filterParams, setFilterParams] = useState<ticketFilterParams>({
    code: '',
    email: '',
    page: 1,
    size:3,
    dateRange: undefined,
  })
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
  //     setUserCarList((prevParams: any) => ({
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
        <div className='grid gap-4 py-4'>
          <div className='flex flex-col'>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
              <div className='inline-block min-w-full align-middle'>
                <div className='overflow-hidden relative h-[20.27rem] overflow-y-auto no-scrollbar'>
                  <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                    <thead className='bg-gray-100 dark:bg-gray-700 sticky top-0'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                        >
                          Car
                        </th>
                        <th
                          scope='col'
                          className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                        >
                          Status
                        </th>
                        <th
                          scope='col'
                          className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                        >
                          Valid date
                        </th>
                        <th
                          scope='col'
                          className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                        >
                          Expired date
                        </th>
                        <th
                          scope='col'
                          className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                        {data.map((it) => (
                          <tr key={it.id} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                              {it.car}
                            </td>
                            <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>
                              {it.status}
                            </td>
                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                              {it.validDate}
                            </td>
                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                              {it.expiredDate}
                            </td>
                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                              {it.price}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <CustomTable
              currentPage={userCarList.totalPage}
              totalPage={userCarList.currentPage}
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
                    Biển số
                  </th>
                  <th
                    scope='col'
                    className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                  >
                    Ngày đăng kí
                  </th>
                  <th
                    scope='col'
                    className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                  ></th>
                </tr>
              )}
              rowData={userCarList.items.map((it: any) => {
                return {
                  content: it,
                  rowRender: (obj: any) => (
                    <tr
                      key={obj?.id}
                      className='hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {obj.code}
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {it?.createdAt ? formatDate(it?.createdAt) : null}
                        {obj?.createdAt}
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant='ghost'
                              className='h-8 w-8 p-0'
                            >
                              <span className='sr-only'>Open menu</span>
                              <MoreHorizontal className='h-4 w-4' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuItem
                              onClick={() => console.log('test')}
                              className='focus:bg-red-500 focus:text-white'
                            >
                              Xóa xe
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ),
                }
              })}
            /> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
