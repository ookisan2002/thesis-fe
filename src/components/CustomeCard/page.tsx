import {Car, DollarSign, Mail, Tag, UserRound} from 'lucide-react'
import React from 'react'

interface CustomeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  desRow1: string
  desRow2: string
  desRow3: string
  subDes: string
  key?: string | number
  getDetail?: React.Dispatch<React.SetStateAction<string>>
}

export function CustomeCarCard({
  title,
  desRow1,
  desRow2,
  desRow3,
  subDes,
  className,
  key,
  getDetail,
  ...props
}: CustomeCardProps) {
  return (
    <div
      key={key}
      {...props}
      className={`${key} h-auto flex flex-col p-[1.88rem] tablet:p-[2.88rem] bg-white shadow-[6px_0px_39.768px_0px_rgba(0,0,0,0.05)] rounded-[0.9375rem] tablet:rounded-[1.9375rem] ${className}`}
    >
      <h5 className='text-[1.25rem] tablet:text-[3.25rem] font-semibold leading-[150%] mb-[2.06rem]'>
        {title}
      </h5>
      <div className='flex items-center'>
        <Car className='[&_*]:stroke-primary size-[1.375rem] tablet:size-[2.375rem] mr-[0.75rem]' />
        <p className='text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-normal text-[#444]'>
          {desRow1}
        </p>
      </div>
      <div className='flex items-center my-[0.62rem]'>
        <UserRound className='[&_*]:stroke-primary size-[1.375rem] tablet:size-[2.375rem] mr-[0.75rem]' />
        <p className='text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-normal text-[#444]'>
          {desRow2}
        </p>
      </div>
      <div className='flex items-center mb-[1.31rem]'>
        <Mail className='[&_*]:stroke-primary size-[1.375rem] tablet:size-[2.375rem] mr-[0.75rem]' />
        <p className='text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-normal text-[#444]'>
          {desRow3}
        </p>
      </div>
      <div className='w-full flex justify-between pt-[1.37rem] border-t-[0.04375rem] border-t-[#44444480] mt-auto'>
        <p className='text-[#828282] text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-semibold'>
          Ngày đăng kí: <br />
          {subDes}
        </p>
        <button
          onClick={() => getDetail && getDetail(`${key}`)}
          className='size-[3.4375rem] tablet:size-[6.4375rem] transition-all bg-[#444]  hover:bg-blue-400 text-white flex justify-center items-center rounded-full leading-[160%] text-[0.75rem]  tablet:text-[1.75rem] font-normal'
        >
          Lịch sử
        </button>
      </div>
    </div>
  )
}

export function CustomeTicketCard({
  title,
  desRow1,
  desRow2,
  desRow3,
  subDes,
  className,
  key,
  ...props
}: CustomeCardProps) {
  return (
    <div
      key={key}
      {...props}
      className={`p-[1.88rem] tablet:p-[2.88rem] h-fit bg-white shadow-[6px_0px_39.768px_0px_rgba(0,0,0,0.05)] rounded-[0.9375rem] tablet:rounded-[1.9375rem] ${className}`}
    >
      <h5 className='text-[1.25rem] tablet:text-[3.25rem] font-semibold leading-[150%] mb-[2.06rem]'>
        {title}
      </h5>
      <div className='flex'>
        <DollarSign className='[&_*]:stroke-primary size-[1.375rem] tablet:size-[2.375rem] mr-[0.75rem]' />
        <p className='text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-normal text-[#444]'>
          {desRow1}
        </p>
      </div>
      <div className='flex my-[0.62rem]'>
        <Tag className='[&_*]:stroke-primary size-[1.375rem] tablet:size-[2.375rem] mr-[0.75rem]' />
        <p className='text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-normal text-[#444]'>
          {desRow2}
        </p>
      </div>
      <div className='flex'>
        <Mail className='[&_*]:stroke-primary size-[1.375rem] tablet:size-[2.375rem] mr-[0.75rem]' />
        <p className='text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-normal text-[#444]'>
          {desRow3}
        </p>
      </div>
      <div className='w-full flex justify-between pt-[1.37rem] mt-[1.31rem] border-t-[0.04375rem] border-t-[#44444480]'>
        <p className='text-[#828282] text-[0.9375rem] tablet:text-[1.9375rem] leading-[160%] font-semibold'>
          Ngày đăng kí: <br />
          {subDes}
        </p>
        {/* <button className='size-[3.4375rem] tablet:size-[6.4375rem] transition-all bg-[#444]  hover:bg-[#fa4545] text-white flex justify-center items-center rounded-full leading-[160%] text-[0.75rem]  tablet:text-[1.75rem] font-normal'>
      Xóa
    </button> */}
      </div>
    </div>
  )
}
