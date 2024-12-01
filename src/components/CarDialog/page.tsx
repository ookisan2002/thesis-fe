'use client'

import React, {useContext, useEffect, useRef, useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import {useForm} from 'react-hook-form'
import {string, z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button} from '../ui/button'
import {addCarFormSchema} from '@/lib/Schemas'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {MoreHorizontal} from 'lucide-react'
import useSWR from 'swr'
import {
  formatDate,
  getFetcher,
  postFetcher,
  renderPagination,
  toQueryString,
} from '@/lib/utils'
import {env} from '@/lib/environment'
import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import {carFilterParams} from '@/lib/constants'
import CustomTable from '../CustomTable/page'

export default function CarDialog({children}: {children: React.ReactNode}) {
  const [formData, setFormData] = useState<FormData | null>(null)
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const [userCarList, setUserCarList] = useState<any>({
    totalPage: 10,
    currentPage: 1,
    items: [],
  })
  const [filterParams, setFilterParams] = useState<carFilterParams>({
    code: '',
    email: '',
    page: 1,
    size: 3,
  })
  const formAddCar = useForm<z.infer<typeof addCarFormSchema>>({
    resolver: zodResolver(addCarFormSchema),
    defaultValues: {
      code: '',
      name: '',
    },
  })
  const {data: carListUpdate, isLoading: carListUpdateLoading} = useSWR(
    formData && value.token ? [`${env.API}/car`, formData] : null,
    ([url, formData]) =>
      postFetcher({
        url: url,
        data: formData,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    console.log(toQueryString(filterParams))
  }, [filterParams])

  const {data: carList, isLoading: carListLoading} = useSWR(
     value.token ?`${env.API}/car/get-car-user` :null,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const onSubmit = async (car: any) => {
    setFormData(car)
  }

  useEffect(() => {
    if (carList?.data?.items.length > 0 && carList?.data?.items.length) {
      setUserCarList((prevParams: any) => ({
        ...prevParams,
        totalPage: carList?.data?.totalPage || 10,
        currentPage: carList?.data?.currentPage || 1,
        items: carList?.data?.items || [],
      }))
    }
  }, [carList])

  // useEffect(() => {
  //   if (carListUpdate) {
  //     setUserCarList(carListUpdate?.data)
  //   }
  // }, [carListUpdate])

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className='cursor-pointer'
      >
        {children}
      </DialogTrigger>
      <DialogContent className='max-w-[unset] min-w-[47rem] w-[65rem]'>
        <DialogHeader>
          <DialogTitle>Danh sách xe đã đăng kí</DialogTitle>
          <DialogDescription>
            Những xe bạn đã đăng kí để mua vé trước đó.
          </DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <Form {...formAddCar}>
              <form
                className='w-full h-fit grid gap-y-[0.62rem]'
                onSubmit={formAddCar.handleSubmit(onSubmit)}
              >
                <FormField
                  control={formAddCar.control}
                  name={'code'}
                  render={({field}) => {
                    return (
                      <FormItem className='mb-[1.5rem]'>
                        <div className='mb-2'>
                          <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                            Biển xe
                          </FormLabel>
                        </div>
                        <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                          <FormControl>
                            <input
                              type='text'
                              placeholder='29A-12345'
                              value={field.value}
                              onChange={(e) => field.onChange(e.target.value)}
                              className='p-[0.81rem_1.5rem] w-full'
                              required
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />

                <FormField
                  control={formAddCar.control}
                  name={'name'}
                  render={({field}) => {
                    return (
                      <FormItem className='mb-[1.5rem]'>
                        <div className='mb-2'>
                          <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                            Hãng xe
                          </FormLabel>
                        </div>
                        <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                          <FormControl>
                            <input
                              type='text'
                              placeholder='Honda'
                              value={field.value}
                              onChange={(e) => field.onChange(e.target.value)}
                              className='p-[0.81rem_1.5rem] w-full'
                              required
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />

                <DialogFooter>
                  <Button
                    className={`text-white w-full rounded-md py-6 ${
                      carListUpdateLoading && 'pointer-events-none'
                    }`}
                    type='submit'
                  >
                    Đăng kí xe
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
          <CustomTable
            currentPage={userCarList.totalPage}
            totalPage={userCarList.currentPage}
            setCurrentPage={(i: number) => {
              setFilterParams((prevParams) => ({
                ...prevParams,
                page: i,
              }))
            }}
            colRender={() => (
              <tr>
                <th
                  scope='col'
                  className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                >
                  Biển số
                </th>
                <th
                  scope='col'
                  className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                >
                  Ngày đăng kí
                </th>
                <th
                  scope='col'
                  className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                ></th>
              </tr>
            )}
            rowData={userCarList.items.map((it: any) => {
              return {
                content: it,
                rowRender: (obj: any) => (
                  <tr
                    key={obj?.id}
                    className='hover:bg-gray-100 dark:hover:bg-gray-700'
                  >
                    <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {obj.code}
                    </td>
                    <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {/* {it?.createdAt ? formatDate(it?.createdAt) : null} */}
                      {obj?.createdAt}
                    </td>
                    <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant='ghost'
                            className='h-8 w-8 p-0'
                          >
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuItem
                            onClick={() => console.log('test')}
                            className='focus:bg-red-500 focus:text-white'
                          >
                            Xóa xe
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ),
              }
            })}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// {
//   rowRender: {(obj) => (
//     <tr
//       key={obj?.id}
//       className='hover:bg-gray-100 dark:hover:bg-gray-700'
//     >
//       <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
//         {obj.code}
//       </td>
//       <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
//         {/* {it?.createdAt ? formatDate(it?.createdAt) : null} */}
//         {obj?.createdAt}
//       </td>
//       <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant='ghost'
//               className='h-8 w-8 p-0'
//             >
//               <span className='sr-only'>Open menu</span>
//               <MoreHorizontal className='h-4 w-4' />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align='end'>
//             <DropdownMenuItem
//               onClick={() => console.log('test')}
//               className='focus:bg-red-500 focus:text-white'
//             >
//               Xóa xe
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </td>
//     </tr>
//   )},
//   content: it
// }
