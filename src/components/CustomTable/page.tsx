'use client'

import React, {useEffect, useRef} from 'react'
import {renderPagination} from '@/lib/utils'

export interface rowProps {
  content: any
  rowRender: () => any
}

export default function CustomTable({
  totalPage,
  currentPage,
  setCurrentPage,
  rowData = [],
  colRender
}: {
  totalPage: number
  currentPage: number
  setCurrentPage: React.Dispatch<any>
  rowData: rowProps[]
  colRender: () => any
}) {
  const carPagination = useRef(null)
  useEffect(() => {
    if (carPagination.current)
      renderPagination({
        totalPages: totalPage,
        currentPage: currentPage,
        setCurrentPage: (i: number) => {
          setCurrentPage(i)
        },
        paginationControl: carPagination.current,
      })
  }, [currentPage, setCurrentPage, totalPage])
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden relative h-[20.27rem] overflow-y-auto no-scrollbar'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-gray-100 dark:bg-gray-700 sticky top-0'>
                {colRender()}
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                {rowData?.map((it: any) => {
                    return it.rowRender(it.content)
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>
      <div
        ref={carPagination}
        className='wrap_pagination_news !mt-[0.56rem] self-end'
      >
        <div id='pagination-controls'></div>
      </div>
    </div>
  )
}

//   <tr
//     key={it?.id}
//     className='hover:bg-gray-100 dark:hover:bg-gray-700'
//   >
//     <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
//       {it.code}
//     </td>
//     <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
//       {/* {it?.createdAt ? formatDate(it?.createdAt) : null} */}
//       {it?.createdAt}
//     </td>
//     <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant='ghost'
//             className='h-8 w-8 p-0'
//           >
//             <span className='sr-only'>Open menu</span>
//             <MoreHorizontal className='h-4 w-4' />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align='end'>
//           <DropdownMenuItem
//             onClick={() => console.log('test')}
//             className='focus:bg-red-500 focus:text-white'
//           >
//             Xóa xe
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </td>
//   </tr>
