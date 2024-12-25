import getData from '@/lib/getData'
import BuySection from '@/Section/BuyPage/page'
import Banner from '@/Section/Homepage/Banner/page'
import {cookies} from 'next/headers'
import React from 'react'

export default async function BuyPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const [carList] = await Promise.all([
    getData({
      api: '/car/get-car-user',
      option: {
        Authorization: `Bearer ${token?.value}`,
      },
    }),
  ])
  return (
    <main className='flex flex-col relative'>
      <Banner />
      <BuySection carList={carList?.data?.items || []} />
    </main>
  )
}
