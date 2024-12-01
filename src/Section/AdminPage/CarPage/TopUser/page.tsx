import React from 'react'

export default function TopUser({topUser=[1,2,3,4,5]}:any) {
  return (
    <div className='col-span-1 xsm:col-span-3'>
      <div className='!z-5 sticky top-0 flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-100 dark:shadow-none  dark:!bg-navy-800 dark:text-white  w-full sm:overflow-auto px-6 py-4'>
        <h4 className='text-xl font-bold text-navy-700 dark:text-white'>
          Top user
        </h4>
        <table className='w-full mt-8'>
          <thead>
            <tr className='!border-b-[0.04375rem] !border-gray-400'>
              <th className='text-sm pb-2 font-bold text-[#a3aed0] text-left w-2/3'>
                User
              </th>
              <th className='text-sm pb-2 font-bold text-[#a3aed0] text-left w-1/3'>
                Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {topUser.map((it: number) => (
              <tr key={it}>
                <td className='text-sm py-3 font-medium text-[#1b254b]'>
                  dainam@gmail.com
                </td>
                <td className='py-3 text-md font-medium text-[#a3aed0]'>
                  123$
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
