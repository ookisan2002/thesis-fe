import {DateRange} from 'react-day-picker'

export const lineChartDataTotalSpent = [
  {
    name: 'Revenue',
    data: [50, 64, 48, 66, 49, 68],
    color: '#4318FF',
  },
  {
    name: 'Profit',
    data: [30, 40, 24, 46, 20, 46],
    color: '#6AD2FF',
  },
]

export const barChartDataWeeklyRevenue = [
  {
    name: 'PRODUCT A',
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: '#6AD2Fa',
  },
  {
    name: 'PRODUCT B',
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: '#4318FF',
  },
  {
    name: 'PRODUCT C',
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: '#EFF4FB',
  },
]

export interface carFilterParams {
  code: string
  email: string
  page: number
  size: number
}

export interface ticketFilterParams {
  code: string
  email: string
  page: number
  size: number
  dateRange: DateRange | undefined
}


export interface carParkInforParams {
  code: string
  email: string
  page: number
  size: number
  dateRange: DateRange | undefined
}

export interface carParkHistoryParams {
  code: string
  action: string
  page: number
  size: number
  dateRange: DateRange | undefined
}