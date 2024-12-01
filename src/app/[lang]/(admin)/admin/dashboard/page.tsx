import React from 'react'
import Widget from '@/components/Widget/page'
import {ArrowUp, ChartColumn, File, HandCoins, Ticket} from 'lucide-react'
import Card from '@/components/Card/page'
import LineChart from '@/components/Chart/LineChart/page'
import {barChartOptionsWeeklyRevenue, lineChartOptionsTotalSpent1} from '@/lib/utils'
import {barChartDataWeeklyRevenue, lineChartDataTotalSpent} from '@/lib/constants'
import BarChart from '@/components/Chart/BarChart/page'


const TotalSpent = () => {
	return (
		<Card extra="!p-[1.25rem] text-center">
			<div className="flex h-full w-full flex-row justify-between flex-nowrap xsm:flex-wrap">
				<div className="flex flex-col">
					<p className="mt-[1.25rem] text-3xl font-bold text-navy-700 dark:text-white">
						$37.5K
					</p>
					<div className="flex flex-col items-start">
						<p className="mt-2 text-sm text-gray-600">Total Spent</p>
						<div className="flex flex-row items-center justify-center">
							<ArrowUp className="font-medium text-green-500" />
							<p className="text-sm font-bold text-green-500"> +2.45% </p>
						</div>
					</div>
				</div>
				<div className="h-full w-full text-[12px]">
					<LineChart
						chartOptions={lineChartOptionsTotalSpent1}
						chartData={lineChartDataTotalSpent}
					/>
				</div>
			</div>
		</Card>
	)
}



const WeeklyRevenue = () => {
	return (
		<Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
			<div className="mb-auto flex items-center justify-between px-6">
				<h2 className="text-lg font-bold text-navy-700 dark:text-white">
					Weekly Revenue
				</h2>
			</div>

			<div className="tablet:mt-16">
				<div className="w-full h-[21.875rem] xsm:h-[15.625rem]">
					<BarChart
						chartData={barChartDataWeeklyRevenue}
						chartOptions={barChartOptionsWeeklyRevenue}
					/>
				</div>
			</div>
		</Card>
	)
}

export default function AdminDashboardPage() {
	return (
		<div className={'p-[1rem] ml-[310px] xlg:ml-0 tablet:p-[2rem] bg-background-light min-h-screen'}>
			<p className={'shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold'}>Main dashboash</p>
			<div className="mt-3 grid grid-cols-1 gap-5 tablet:grid-cols-2 lg:grid-cols-4">
				<Widget
					icon={<ChartColumn className="h-7 w-7" />}
					title={'Vé ngày'}
					subtitle={'$340.5'}
				/>
				<Widget
					icon={<ChartColumn className="h-7 w-7" />}
					title={'Vé tháng'}
					subtitle={'$574.34'}
				/>
				<Widget
					icon={<Ticket className="h-7 w-7" />}
					title={'Tổng số vé bán ra'}
					subtitle={'145'}
				/>
				<Widget
					icon={<HandCoins className="h-6 w-6" />}
					title={'Tổng doanh thu'}
					subtitle={'$2433'}
				/>
			</div>
			<div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
				<TotalSpent />
				<WeeklyRevenue />
			</div>
		</div>
	)
}
