import React from 'react'
import Widget from '@/components/Widget/page'
import {ArrowUp, ChartColumn, HandCoins, Ticket} from 'lucide-react'
import Card from '@/components/Card/page'
import LineChart from '@/components/Chart/LineChart/page'
import {
  barChartOptionsRevenueGen,
  lineChartOptionsTotalSpentGen,
} from '@/lib/utils'
import BarChart from '@/components/Chart/BarChart/page'
import {cookies} from 'next/headers'
import getData from '@/lib/getData'

const TotalSpent = ({
  lineChartOptionsTotalSpent,
  lineChartDataTotalSpent,
}: any) => {
  return (
    <Card extra='!p-[1.25rem] text-center'>
      <div className='flex h-full w-full flex-row justify-between flex-nowrap xlg:flex-col'>
        <div className='flex flex-col'>
          <p className='mt-[1.25rem] lg:text-3xl tablet:text-[3.75rem] font-bold text-navy-700 dark:text-white w-fit'>
            $37.5K
          </p>
          <div className='flex flex-col items-start'>
            <p className='mt-2 lg:text-sm tablet:text-[1.75rem] text-gray-600'>
              Total Spent
            </p>
            <div className='flex flex-row items-center justify-center'>
              <ArrowUp className='font-medium text-green-500' />
              <p className='lg:text-sm tablet:text-[1.75rem] font-bold text-green-500'>
                {' '}
                +2.45%{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='h-full w-full text-[12px]'>
          <LineChart
            chartOptions={lineChartOptionsTotalSpent}
            chartData={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  )
}

const TicketQuantityRevenue = ({
  barChartDataTicketQuantityRevenue,
  barChartOptionsRevenue,
}: any) => {
  return (
    <Card extra='flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center'>
      <div className='mb-auto flex items-center justify-between px-6'>
        <h2 className='text-lg font-bold text-navy-700 dark:text-white'>
          Weekly Revenue
        </h2>
      </div>

      <div className='tablet:mt-16'>
        <div className='w-full h-[21.875rem] xsm:h-[15.625rem]'>
          <BarChart
            chartData={barChartDataTicketQuantityRevenue}
            chartOptions={barChartOptionsRevenue}
          />
        </div>
      </div>
    </Card>
  )
}

export default async function AdminDashboardPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const [revenue] = await Promise.all([
    getData({
      api: '/statistics/income',
      option: {
        Authorization: `Bearer ${token?.value}`,
      },
    }),
    // getDictionary(params.lang),
  ])
  const barChartDataTicketQuantityRevenue = revenue?.data?.map(
    (item: any, i: number) => {
      return {
        name: item?.ticketName,
        data: revenue?.data[i]?.incomeList.map((income: any) => income?.total),
        color: i === 0 ? '#50e3c2' :'#0070f3',
      }
    },
  )

  const lineChartDataTotalSpent = revenue?.data?.map((item: any, i: number) => {
    return {
      name: item?.ticketName,
      data: revenue?.data[i]?.incomeList.map(
        (income: any) => income?.totalIncome,
      ),
      color: i === 0 ? '#50e3c2' :'#0070f3',
    }
  })

  const barChartOptionsRevenue = barChartOptionsRevenueGen(
    revenue?.data[0]?.incomeList.map((income: any) => income?.month),
  )

  const lineChartOptionsTotalSpent = lineChartOptionsTotalSpentGen(
    revenue?.data[0]?.incomeList.map((income: any) => income?.month),
  )

  return (
    <div
      className={
        'p-[1rem] ml-[310px] xlg:ml-0 tablet:p-[2rem] bg-background-light min-h-screen'
      }
    >
      <p
        className={
          'shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold'
        }
      >
        Main dashboash
      </p>
      <div className='mt-3 grid grid-cols-1 gap-5 tablet:grid-cols-2 lg:grid-cols-4'>
        <Widget
          icon={<ChartColumn className='h-7 w-7 tablet:size-[3rem]' />}
          title={revenue?.data[0]?.ticketName}
          subtitle={revenue?.data[0]?.totalIncome}
        />
        <Widget
          icon={<ChartColumn className='h-7 w-7 tablet:size-[3rem]' />}
          title={revenue?.data[1]?.ticketName}
          subtitle={revenue?.data[1]?.totalIncome}
        />
        <Widget
          icon={<Ticket className='h-7 w-7 tablet:size-[3rem]' />}
          title={'Tổng số vé bán ra'}
          subtitle={revenue?.data[0]?.total + revenue?.data[1]?.total}
        />
        <Widget
          icon={<HandCoins className='h-6 w-6 tablet:size-[3rem]' />}
          title={'Tổng doanh thu'}
          subtitle={`${
            revenue?.data[0]?.totalIncome + revenue?.data[1]?.totalIncome
          }`}
        />
      </div>
      <div className='mt-5 grid grid-cols-2 xsm:grid-cols-1 gap-5'>
        <TotalSpent
          lineChartDataTotalSpent={lineChartDataTotalSpent.reverse()}
          lineChartOptionsTotalSpent={lineChartOptionsTotalSpent}
        />
        <TicketQuantityRevenue
          barChartDataTicketQuantityRevenue={barChartDataTicketQuantityRevenue.reverse()}
          barChartOptionsRevenue={barChartOptionsRevenue}
        />
      </div>
    </div>
  )
}
