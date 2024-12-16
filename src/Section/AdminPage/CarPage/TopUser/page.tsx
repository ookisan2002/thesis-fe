import React from 'react'

export default function TopUser({topUser=[]}:any) {
  return (
    <div className='col-span-1 xsm:col-span-3'>
      <div className='!z-5 sticky top-0 flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-100 dark:shadow-none  dark:!bg-navy-800 dark:text-white  w-full sm:overflow-auto px-6 py-4 tablet:p-[2rem_2.5rem]'>
        <h4 className='text-xl tablet:text-[2.25rem] font-bold text-navy-700 dark:text-white'>
          Top user
        </h4>
        <table className='w-full mt-8'>
          <thead>
            <tr className='!border-b-[0.04375rem] !border-gray-400'>
              <th className='text-sm tablet:text-[1.5rem] pb-2 font-bold text-[#a3aed0] text-left w-2/3'>
                User
              </th>
              <th className='text-sm tablet:text-[1.5rem] pb-2 font-bold text-[#a3aed0] text-left w-1/3'>
                Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {topUser.map((it: any) => (
              <tr key={it}>
                <td className='text-sm tablet:text-[1.5rem] py-3 tablet:py-[1rem] font-medium text-[#1b254b]'>
                  {it?.email}
                </td>
                <td className='py-3 tablet:text-[1.5rem] text-md font-medium text-[#a3aed0]'>
                {(it?.total || 0).toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
