import getData from '@/lib/getData'
import { toQueryString } from '@/lib/utils'
import TicketTableSection from '@/Section/AdminPage/TicketPage/page'
import { cookies } from 'next/headers'
import React from 'react'

export default async function TicketPage() {
  const queryString = toQueryString({
    page: 1,
    size: 9,
  })
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const [ticketList] = await Promise.all([
    getData({
      api: `/ticket?${queryString}`,
      option: {
        Authorization: `Bearer ${token?.value}`,
      },
    }),
    // getDictionary(params.lang),
  ])
  return (
    <section
      className={
        'p-[1rem]  ml-[310px] xlg:ml-0 tablet:p-[2rem] bg-background-light min-h-screen'
      }
    >
      {/* <div className='bg-slate-500 opacity-30 fixed top-0 left-0 w-[100vw] h-[100vh] z-50'>

</div> */}
      <p
        className={
          'shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold'
        }
      >
        Tickets page
      </p>
      <div className='mt-3'>
        <TicketTableSection ticketList={ticketList?.data} />
      </div>
    </section>

  )
}
