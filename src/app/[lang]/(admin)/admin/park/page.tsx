import Card from '@/components/Card/page'
import Widget from '@/components/Widget/page'
import CarParkHistoryTable from '@/Section/AdminPage/CarParkPage/CarParkHistory/page'
import CarParkInforTable from '@/Section/AdminPage/CarParkPage/CarParkInforTable/page'
import {CircleParking, CircleParkingOff} from 'lucide-react'
import React from 'react'

export default function CarParkPage() {
  let url = 'ws://localhost:8080/ws/info'
  let ws = new WebSocket(url)

  ws.onopen = function () {
    console.log('Kết nối thành công')
    ws.send('getInfo')
  }

  ws.onmessage = function (msg) {
    let data = JSON.parse(msg.data)
    console.log(data)
  }

  ws.onclose = function () {
    console.log('Kết nối bị đóng')
  }

  ws.onerror = function (err) {
    console.log('Có lỗi xảy ra: ', err)
  }
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
        Bãi xe
      </p>
      <div className='mt-3 grid grid-cols-1 gap-5 tablet:grid-cols-2 lg:grid-cols-4'>
        <Widget
          icon={<CircleParking className='h-7 w-7' />}
          title={'Slot vé ngày còn trống'}
          subtitle={'20'}
        />
        <Widget
          icon={<CircleParkingOff className='h-6 w-6' />}
          title={'Slot vé ngày đã đặt'}
          subtitle={'20'}
        />
        <Widget
          icon={<CircleParking className='h-7 w-7' />}
          title={'Slot vé tháng còn trống'}
          subtitle={'5'}
        />
        <Widget
          icon={<CircleParkingOff className='h-6 w-6' />}
          title={'Slot vé tháng đã đặt'}
          subtitle={'10'}
        />
      </div>
      <div className='mt-5 grid grid-cols-1 gap-5'>
        <div className='w-full'>
          <CarParkInforTable />
          <CarParkHistoryTable />
        </div>
      </div>
    </div>
  )
}
