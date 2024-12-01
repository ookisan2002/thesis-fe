'use client'

import React, { useContext, useState } from 'react'
import Card from '../Card/page'
import {useForm} from 'react-hook-form'
import {adminAddCarFormSchema} from '@/lib/Schemas'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import useSWR from 'swr'
import { AccountContext, AccountContextType } from '../ContextProvider/page'
import { env } from '@/lib/environment'
import { postFetcher } from '@/lib/utils'
import { DialogFooter } from '../ui/dialog'
import { Button } from '../ui/button'

export default function AdminAddCarDialog() {
   const [formData, setFormData] = useState<FormData | null>(null)
  const formAddCar = useForm<z.infer<typeof adminAddCarFormSchema>>({
    resolver: zodResolver(adminAddCarFormSchema),
    defaultValues: {
      code: '',
      name: '',
      userId: '',
    },
  })
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context

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

  const onSubmit = async (car: any) => {
    setFormData(car)
  }

  return (
    <div className='bg-[#64748b4d] fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center'>
      <Card extra='p-6'>
        <h4 className='text-lg font-semibold leading-none tracking-tight'>
          Thêm xe
        </h4>
        <p className='text-sm text-muted-foreground mb-4'>Thêm xe cho người dùng</p>
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
                className={`text-white w-fit rounded-md py-6 ${
                  carListUpdateLoading && 'pointer-events-none'
                }`}
                type='submit'
              >
                Đăng kí xe
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
