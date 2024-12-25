'use client'

import React, {useCallback, useContext, useEffect, useRef, useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import {Button} from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {signInFormSchema, signUpFormSchema} from '@/lib/Schemas'
import {z} from 'zod'
import {env} from '@/lib/environment'
import {postFetcher} from '@/lib/utils'
import {AccountContext, AccountContextType} from '../ContextProvider/page'
import {toast} from 'sonner'
import useSWRMutation from 'swr/mutation'

export default function LogForm({children}: {children: React.ReactNode}) {
  const [signIn, setSignIn] = useState(true)
  // const [formData, setFormData] = useState<FormData | null>(null)
  const dialogTrigger = useRef<HTMLButtonElement | null>(null)
  const formSignUp = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullname: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
  })

  const formSignIn = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {data, trigger, isMutating} = useSWRMutation(
    signIn ? `${env.API}/auth/login` : `${env.API}/auth/register`,
    (url: string, { arg }: any) => postFetcher({ url, data: arg })
  )

  const onSubmit = async (account: any) => {
    trigger(account)
  }
  const context = useContext(AccountContext)
  const {setValue}: AccountContextType = context

  const fetchToken = useCallback(async (data: any) => {
    await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const payload = await res.json()
      const data = {
        status: res.status,
        payload,
      }
      if (!res.ok) {
        throw data
      }
    })

    setValue((prevParams) => ({
      ...prevParams,
      fullname: data?.user?.fullname,
      email: data?.user?.email,
      address: data?.user?.address,
      phoneNumber: data?.user?.phoneNumber,
      dateOfBirth: data?.user?.dateOfBirth,
      token: data?.token,
      admin: data?.user?.admin,
    }))
  }, [setValue])

  useEffect(() => {
    if (data) {
      toast(data.message, {
        classNames: {
          toast: data.status ? 'bg-primary' : 'bg-red-500',
          title: 'text-white',
        },
      })
      if (data.status) fetchToken(data?.data)
    }
  }, [data, fetchToken])
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className='cursor-pointer'
        ref={dialogTrigger}
      >
        {children}
      </DialogTrigger>
      <DialogContent
        className={`transition-all  duration-400 ${
          signIn ? 'min-h-[29rem] xsm:min-h-[27rem] xsm:w-[20rem]' : 'min-h-[43rem] xsm:min-h-[39rem] xsm:w-[20rem]'
        }`}
      >
        <div className='overflow-hidden w-[28.43rem] xsm:w-full h-fit transition-all no-scrollbar'>
          <div
            className={`flex w-max transition-all duration-400 ${
              signIn ? 'h-[27rem] xsm:h-[24rem] translate-x-0' : 'h-fit translate-x-login'
            }`}
          >
            <div className=' w-[28.43rem] xsm:w-[17rem] flex flex-col items-center'>
              <DialogHeader>
                <DialogTitle className='w-full text-[3rem] mb-4'>
                  Sign In
                </DialogTitle>
              </DialogHeader>

              <Form {...formSignIn}>
                <form
                  className='w-full h-fit grid gap-y-[0.62rem]'
                  onSubmit={formSignIn.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={formSignIn.control}
                    name={'email'}
                    render={({field}) => {
                      return (
                        <FormItem className='mb-[0.5rem]'>
                          <div className='mb-2'>
                            <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                              Email
                            </FormLabel>
                          </div>
                          <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                            <FormControl>
                              <input
                                type='text'
                                placeholder='abc@gmail.com'
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
                    control={formSignIn.control}
                    name={'password'}
                    render={({field}) => {
                      return (
                        <FormItem className='mb-[0.5rem]'>
                          <div className='mb-2'>
                            <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                              Password
                            </FormLabel>
                          </div>
                          <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                            <FormControl>
                              <input
                                type='password'
                                placeholder='Enter your password.'
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
                      className='text-white w-full rounded-md py-6'
                      type='submit'
                    >
                      Sign in
                    </Button>
                  </DialogFooter>
                </form>
              </Form>

              <p className='mt-4'>
                Don't have an account?{' '}
                <span
                  onClick={() => setSignIn(false)}
                  className='text-primary cursor-pointer'
                >
                  Sign up
                </span>
              </p>
            </div>

            <div className='ml-[3rem] w-[28.43rem] xsm:w-[17rem] flex flex-col items-center'>
              <DialogHeader>
                <DialogTitle className='w-full text-[3rem] mb-4'>
                  Sign Up
                </DialogTitle>
              </DialogHeader>

              <Form {...formSignUp}>
                <form
                  className='w-full h-fit grid gap-y-[0.62rem]'
                  onSubmit={formSignUp.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={formSignUp.control}
                    name={'fullname'}
                    render={({field}) => {
                      return (
                        <FormItem className='mb-[0.5rem]'>
                          <div className='mb-2'>
                            <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                              Name
                            </FormLabel>
                          </div>
                          <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                            <FormControl>
                              <input
                                type='text'
                                placeholder='Hoang Thi Thanh Loan'
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
                    control={formSignUp.control}
                    name={'phoneNumber'}
                    render={({field}) => {
                      return (
                        <FormItem className='mb-[0.5rem]'>
                          <div className='mb-2'>
                            <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                              Phone number
                            </FormLabel>
                          </div>
                          <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                            <FormControl>
                              <input
                                type='text'
                                placeholder='0987438***'
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
                    control={formSignUp.control}
                    name={'email'}
                    render={({field}) => {
                      return (
                        <FormItem className='mb-[0.5rem]'>
                          <div className='mb-2'>
                            <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                              Email
                            </FormLabel>
                          </div>
                          <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                            <FormControl>
                              <input
                                type='text'
                                placeholder='abc@gmail.com'
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
                    control={formSignUp.control}
                    name={'password'}
                    render={({field}) => {
                      return (
                        <FormItem className='mb-[0.5rem]'>
                          <div className='mb-2'>
                            <FormLabel className='text-[0.9375rem] font-helvetica leading-[150%] font-[500] text-blackPrimary'>
                              Password
                            </FormLabel>
                          </div>
                          <FormItem className='w-full h-[3.125rem] rounded-[0.5rem] bg-[rgba(217,217,217,0.4)]'>
                            <FormControl>
                              <input
                                type='password'
                                placeholder='Enter your password.'
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
                        isMutating && 'pointer-events-none'
                      }`}
                      type='submit'
                    >
                      Create account
                    </Button>
                  </DialogFooter>
                </form>
              </Form>

              <p className='mt-4'>
                Already have an account ?{' '}
                <span
                  onClick={() => setSignIn(true)}
                  className='text-primary cursor-pointer'
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
