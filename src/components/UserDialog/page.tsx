'use client'

import React, {useContext, useEffect, useRef, useState} from 'react'
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
import useSWR from 'swr'
import {env} from '@/lib/environment'
import {postFetcher} from '@/lib/utils'
import {AccountContext, AccountContextType} from '../ContextProvider/page'

export default function UserForm({children}: {children: React.ReactNode}) {
  const [formData, setFormData] = useState<FormData | null>(null)
  const [signIn, setSignIn] = useState<boolean>(true)
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

  const {data, isLoading} = useSWR(
    formData
      ? [
          signIn ? `${env.API}/auth/login` : `${env.API}/auth/register`,
          formData,
        ]
      : null,
    ([url, formData]) => postFetcher({url: url, data: formData}),
  )

  const onSubmit = async (account: any) => {
    setFormData(account)
  }
  const context = useContext(AccountContext)
  const {setValue}: AccountContextType = context
  useEffect(() => {
    if (data) {
      dialogTrigger.current?.click()

      setValue((prev) => {
        return {
          ...prev,
          token: data?.data?.token,
          admin: data?.data?.admin,
          fullname: data?.data?.user?.fullname,
          email: data?.data?.user?.email,
          address: data?.data?.user?.address,
          phoneNumber: data?.data?.user?.phoneNumber,
          dateOfBirth: data?.data?.user?.dateOfBirth,
        }
      })
    }
  }, [data, setValue])
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className='cursor-pointer'
        ref={dialogTrigger}
      >
        {/* <Button variant='outline'>Edit Profile</Button> */}
        {children}
      </DialogTrigger>
      <DialogContent
        className={`transition-all  duration-400 ${
          signIn ? 'h-[29rem] ' : 'h-[43rem]'
        }`}
      >
        <div className='overflow-scroll w-[28.43rem] h-fit transition-all no-scrollbar'>
          <div
            className={`flex w-max transition-all duration-400 ${
              signIn ? 'h-[27rem] translate-x-0' : 'h-fit translate-x-login'
            }`}
          >
            <div className=' w-[28.43rem] flex flex-col items-center'>
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
                        <FormItem className='mb-[1.5rem]'>
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
                        <FormItem className='mb-[1.5rem]'>
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

            <div className='ml-[3rem] w-[28.43rem] flex flex-col items-center'>
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
                        <FormItem className='mb-[1.5rem]'>
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
                        <FormItem className='mb-[1.5rem]'>
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
                        <FormItem className='mb-[1.5rem]'>
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
                        <FormItem className='mb-[1.5rem]'>
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
                        isLoading && 'pointer-events-none'
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
