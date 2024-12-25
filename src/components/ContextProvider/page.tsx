'use client'
import React, {createContext, useEffect, useState} from 'react'
import useSWR from 'swr'
import {env} from '@/lib/environment'
import {getFetcher, logout} from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'

export interface AccountType {
  fullname: string
  email: string
  address: string
  phoneNumber: string
  dateOfBirth: string
  token: string
  admin: boolean
  parkInfor: {
    totalSlot: number
    slotAvailable: number
    totalSlotBooked: number
    slotBookedAvailable: number
  }
}

export interface AccountContextType {
  value: AccountType
  setValue: React.Dispatch<React.SetStateAction<AccountType>>
}

const AccountContext = createContext<AccountContextType>({
  value: {
    fullname: '',
    email: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
    token: '',
    admin: false,
    parkInfor: {
      totalSlot: 1,
      slotAvailable: 1,
      totalSlotBooked: 1,
      slotBookedAvailable: 1,
    },
  },
  setValue: () => {},
})

const ContaxtProvider = ({
  children,
  initialToken,
}: {
  children: React.ReactNode
  initialToken: string | undefined
}) => {
  const [value, setValue] = useState<AccountType>({
    fullname: '',
    email: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
    token: initialToken || '',
    admin: false,
    parkInfor: {
      totalSlot: 1,
      slotAvailable: 1,
      totalSlotBooked: 1,
      slotBookedAvailable: 1,
    },
  })
  const [open, setOpen] = useState(false)
  const {data} = useSWR(
    initialToken && `${env.API}/auth/user`,
    (url: string) =>
      getFetcher({
        url: url,
        header: {
          Authorization: `Bearer ${initialToken}`,
        },
      }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    if (data) {
      setValue((prevParams) => ({
        ...prevParams,
        fullname: data?.data?.fullname || '',
        email: data?.data?.email || '',
        address: data?.data?.address || '',
        phoneNumber: data?.data?.phoneNumber || '',
        dateOfBirth: data?.data?.dateOfBirth || '',
        token: initialToken || '',
        admin: data?.data?.admin || '',
      }))
    }
  }, [data, initialToken])

  useEffect(() => {
    let url = `${env.API}/ws/info`
    let ws = new WebSocket(url)
    ws.onopen = function () {
      ws.send('getInfo')
    }

    ws.onmessage = async function (msg) {
      const res = await JSON.parse(msg.data)
      setValue((prevParams) => ({
        ...prevParams,
        parkInfor: res,
      }))
    }

    // ws.onclose = function () {
    // }

    ws.onerror = function (err) {
      throw err
    }
  }, [])

  useEffect(() => {
    // let checkInterval: NodeJS.Timeout
    // if (initialToken) {
    //   const tokenData = JSON.parse(atob(initialToken.split('.')[1]))
    //   const expiryTime = tokenData.exp * 1000
    //   let isTokenExpiring
    //   checkInterval = setInterval(() => {
    //     let currentTime = Date.now()
    //     isTokenExpiring = expiryTime - currentTime < 5 * 1000
    //     if (isTokenExpiring) {
    //       setOpen(true)
    //       clearInterval(checkInterval)
    //     } else {
    //       setOpen(false)
    //     }
    //   }, 4000)
    // }
    // return () => clearInterval(checkInterval)

    let timeoutId: NodeJS.Timeout

    const setTokenTimeout = () => {
      if (initialToken) {
        const tokenData = JSON.parse(atob(initialToken.split('.')[1]))
        const expiryTime = tokenData.exp * 1000
        const currentTime = Date.now()
        const timeRemaining = expiryTime - currentTime

        if (timeRemaining > 5000) {
          timeoutId = setTimeout(() => {setTokenTimeout()}, timeRemaining - 5000)
        } else {
          setOpen(true)
        }
      }
    }
    setTokenTimeout()

    return () => clearTimeout(timeoutId)
  }, [initialToken, value])
  const handleLogout = () => {
    setOpen(false)
    logout()
  }
  return (
    <AccountContext.Provider value={{value, setValue}}>
      <>
        {children}
        <Dialog
          open={open}
          onOpenChange={setOpen}
        >
          <DialogContent
            className='sm:max-w-[425px]'
            id='close-hidden'
          >
            <DialogHeader>
              <DialogTitle>Phiên làm việc của bạn đã hệt hạn!</DialogTitle>
              <DialogDescription>
                Hãy đăng nhập lại để tiếp tục làm việc
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <div>
                <Button
                  onClick={() => handleLogout()}
                  className={'text-white'}
                >
                  Đăng nhập lại
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    </AccountContext.Provider>
  )
}

export {AccountContext, ContaxtProvider}
