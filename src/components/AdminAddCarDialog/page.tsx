'use client'

import React, {useContext, useEffect, useState} from 'react'
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
import {AccountContext, AccountContextType} from '../ContextProvider/page'
import {env} from '@/lib/environment'
import {cn, getFetcher, postFetcher, toQueryString} from '@/lib/utils'
import {DialogFooter} from '../ui/dialog'
import {Button} from '../ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '../ui/popover'
import {Check, ChevronsUpDown, X} from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../ui/command'
import useSWRMutation from 'swr/mutation'
import {Input} from '../ui/input'
import {toast} from 'sonner'

export default function AdminAddCarDialog({
  closeModal,
}: {
  closeModal: React.Dispatch<React.SetStateAction<string>>
}) {
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
  const [userFilter, setUserFilter] = useState<string>('')
  const [userFilterResult, setUserFilterResult] = useState<any>([])
  const {
    data: updateCar,
    trigger,
    isMutating: carListUpdateLoading,
  } = useSWRMutation(value.token ? [`${env.API}/car`] : null, ([url], {arg}) =>
    postFetcher({
      url: url,
      data: arg,
      header: {
        Authorization: `Bearer ${value.token}`,
      },
    }),
  )

  const {data: userList, trigger: triggerUserList} = useSWRMutation(
    `${env.API}/user/list-user?${toQueryString({email: userFilter})}`,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
  )

  const onSubmit = (car: any) => {
    trigger(car)
  }
  useEffect(() => {
    if (updateCar) {
      toast(updateCar?.message, {
        classNames: {
          toast: updateCar?.status ? 'bg-primary' : 'bg-red-500',
          title: 'text-white',
        },
      })
    }
  }, [updateCar])
  useEffect(() => {
    const debouncedTrigger = setTimeout(() => {
      if (value.token && userFilter.length !== 0) {
        triggerUserList()
      }
    }, 600)
    return () => clearTimeout(debouncedTrigger)
  }, [triggerUserList, userFilter, value.token])

  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setUserFilterResult(userList?.data?.items || [])
  }, [userList])

  return (
    <div className='bg-[#64748b4d] fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center'>
      <Card extra='p-6 relative'>
        <X
          className='h-4 w-4 absolute top-6 right-6 cursor-pointer'
          onClick={() => closeModal('')}
        />
        <h4 className='text-lg font-semibold leading-none tracking-tight'>
          Thêm xe
        </h4>
        <p className='text-sm text-muted-foreground mb-4'>
          Thêm xe cho người dùng
        </p>
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

            <FormField
              control={formAddCar.control}
              name={'userId'}
              render={({field}) => {
                return (
                  <FormItem className='mb-[1.5rem]'>
                    <div className='mb-2'>
                      <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                        Người dùng
                      </FormLabel>
                    </div>
                    <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                      <FormControl>
                        <Popover
                          open={open}
                          onOpenChange={setOpen}
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant='outline'
                              role='combobox'
                              aria-expanded={open}
                              className='size-full bg-transparent justify-between'
                            >
                              {field.value.length > 0
                                ? userFilterResult.find(
                                    (user: any) => user.id == field.value,
                                  )?.email
                                : 'Select User email...'}
                              <ChevronsUpDown className='opacity-50' />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-[15.3rem] p-0'>
                            <Command>
                              <Input
                                onChange={(email: any) =>
                                  setUserFilter(email.target.value)
                                }
                                placeholder='Search User email...'
                                className='!ring-0'
                              />
                              <CommandList>
                                <CommandEmpty>No user found.</CommandEmpty>
                                <CommandGroup>
                                  {userFilterResult?.map((user: any) => (
                                    <CommandItem
                                      key={user.id}
                                      value={user.id}
                                      onSelect={(currentValue) => {
                                        field.onChange(
                                          currentValue === field.value
                                            ? ''
                                            : `${user.id}`,
                                        )
                                        setOpen(false)
                                      }}
                                    >
                                      {user.email}
                                      <Check
                                        className={cn(
                                          'ml-auto',
                                          field.value === user.id
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
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
