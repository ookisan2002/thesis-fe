import {ChevronLeft} from 'lucide-react'
import React, {useContext, useEffect, useState} from 'react'
import {AccountContext, AccountContextType} from '../ContextProvider/page'
import {formatDate, getFetcher, toQueryString} from '@/lib/utils'
import {env} from '@/lib/environment'
import CustomTable from '../CustomTable/page'
import useSWR from 'swr'

export default function CarActionHistoryTable({
  carInforId,
  setCarInforId,
}: {
  carInforId: string
  setCarInforId: React.Dispatch<React.SetStateAction<string>>
}) {
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const [userCarAction, setUserCarAction] = useState<any>({
    totalPage: 10,
    currentPage: 1,
    items: [],
  })
  const [filterParams, setFilterParams] = useState<any>({
    currentPage: 1,
    size: 9,
  })
  const {data} = useSWR(
    value.token &&
      carInforId.length > 0 &&
      `${env.API}/action-history/car/${carInforId}?${toQueryString({
        page: filterParams.currentPage,
        size: filterParams.size,
      })}`,
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
    if (data) {
      setUserCarAction((prevParams: any) => ({
        ...prevParams,
        totalPage: data?.data?.totalPage || 10,
        currentPage: data?.data?.currentPage || 1,
        items: data?.data?.items || [],
      }))
    }
  }, [data])

  return (
    <div className='w-[62rem] overflow-scroll no-scrollbar flex flex-col'>
      <div
        className='flex ml-auto items-center cursor-pointer hover:bg-slate-200 p-2 rounded-[2rem] transition-all'
        onClick={() => setCarInforId('')}
      >
        <ChevronLeft />
        <p>Quay lại</p>
      </div>
      <CustomTable
        currentPage={userCarAction.totalPage}
        totalPage={userCarAction.currentPage}
        setCurrentPage={(i: number) => {
          setFilterParams((prevParams: any) => ({
            ...prevParams,
            currentPage: i,
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
              Chủ
            </th>
            <th
              scope='col'
              className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
            >
              Hoạt động
            </th>
            <th
              scope='col'
              className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
            >
              Thời gian
            </th>
          </tr>
        )}
        rowData={userCarAction.items.map((it: any) => {
          return {
            content: it,
            rowRender: (obj: any) => (
              <tr
                key={obj?.id}
                className='hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {obj?.car?.code}
                </td>
                <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {obj?.car?.user?.email}
                </td>
                <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {obj?.action}
                </td>
                <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {obj?.createdAt ? formatDate(obj?.createdAt) : null}
                </td>
              </tr>
            ),
          }
        })}
      />
    </div>
  )
}
