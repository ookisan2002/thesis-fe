import { DollarSign, Mail, Tag } from 'lucide-react'
import React from 'react'

interface CustomeCardProps extends React.HTMLAttributes<HTMLDivElement>{
    title: string
    desRow1: string
    desRow2: string
    desRow3: string
    subDes: string
    key?: string | number
}

export default function CustomeCard({
    title,
    desRow1,
    desRow2,
    desRow3,
    subDes,
    className,
    key,
    ...props
}:CustomeCardProps) {
  return (
    <div
    key={key}
    {...props}
    className={`p-[1.88rem] h-[19.5625rem] bg-white shadow-[6px_0px_39.768px_0px_rgba(0,0,0,0.05)] rounded-[0.9375rem] ${className}`}
  >
    <h5 className='text-[1.25rem] font-semibold leading-[150%] mb-[2.06rem]'>
      {title}
    </h5>
    <div className='flex'>
      <DollarSign className='[&_*]:stroke-primary size-[1.375rem] mr-[0.75rem]' />
      <p className='text-[0.9375rem] leading-[160%] font-normal text-[#444]'>
        {desRow1}
      </p>
    </div>
    <div className='flex my-[0.62rem]'>
      <Tag className='[&_*]:stroke-primary size-[1.375rem] mr-[0.75rem]' />
      <p className='text-[0.9375rem] leading-[160%] font-normal text-[#444]'>
        {desRow2}
      </p>
    </div>
    <div className='flex'>
      <Mail className='[&_*]:stroke-primary size-[1.375rem] mr-[0.75rem]' />
      <p className='text-[0.9375rem] leading-[160%] font-normal text-[#444]'>
        {desRow3}
      </p>
    </div>
    <div className='w-full flex justify-between pt-[1.37rem] mt-[1.31rem] border-t-[0.04375rem] border-t-[#44444480]'>
      <p className='text-[#828282] text-[0.9375rem] leading-[160%] font-semibold'>
        Ngày đăng kí: <br />
        {subDes}
      </p>
      <button className='size-[3.4375rem] transition-all bg-[#444]  hover:bg-[#fa4545] text-white flex justify-center items-center rounded-full leading-[160%] text-[0.75rem] font-normal'>
        Xóa
      </button>
    </div>
  </div>
  )
}
