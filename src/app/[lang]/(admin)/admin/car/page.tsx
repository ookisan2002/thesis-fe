import getData from '@/lib/getData'
import {toQueryString} from '@/lib/utils'
import CarList from '@/Section/AdminPage/CarPage/CarList/page'
import TopUser from '@/Section/AdminPage/CarPage/TopUser/page'
import {cookies} from 'next/headers'
import React from 'react'

export default async function CarPage() {
  const queryString = toQueryString({
    page: 1,
    size: 9,
  })
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const [carList, topUser] = await Promise.all([
    getData({
      api: `/car?${queryString}`,
      option: {
        Authorization: `Bearer ${token?.value}`,
      },
    }),
    getData({
      api: '/statistics/spending',
      option: {
        Authorization: `Bearer ${token?.value}`,
      },
    }),
    // getDictionary(params.lang),
  ])
  return (
    <section
      className={
        'p-[1rem] ml-[310px] xlg:ml-0 tablet:p-[2rem] bg-background-light min-h-screen'
      }
    >
      <p
        className={
          'shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold'
        }
      >
        Car page
      </p>
      <div className='mt-3 grid grid-cols-1 gap-5 lg:grid-cols-3'>
        <CarList carList={carList?.data} />
        <TopUser topUser={topUser?.data} />
      </div>
    </section>
  )
}
