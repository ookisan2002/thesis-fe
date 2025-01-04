'use client'

import {Button} from '@/components/ui/button'
import './styles.css'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import {toast} from 'sonner'
import {
  AccountContext,
  AccountContextType,
} from '@/components/ContextProvider/page'
import useSWRMutation from 'swr/mutation'
import {env} from '@/lib/environment'
import {postFetcher} from '@/lib/utils'
import {useSearchParams} from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export default function BuySection({carList}: any) {
  const context = useContext(AccountContext)
  const {value}: AccountContextType = context
  const [car, setCar] = useState<string>('')
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())
  const [openDialog, setOpenDialog] = useState(false)
  const {
    data,
    trigger,
    isMutating: buyTicketLoading,
  } = useSWRMutation(
    value.token ? [`${env.API}/invoice`] : null,
    ([url], {arg}) =>
      postFetcher({
        url: url,
        data: arg,
        header: {
          Authorization: `Bearer ${value.token}`,
        },
      }),
  )

  const handleBuyTicket = (ticket: any) => {
    if (car === '') {
      toast('Chọn xe bạn muốn mua vé', {
        classNames: {
          toast: 'bg-red-500',
          title: 'text-white',
        },
      })
    } else {
      trigger(ticket)
    }
  }

  useEffect(() => {
    if (Object.values(queryParams).length !== 0) {
      // const responseCode = queryParams.vnp_ResponseCode
      // const transactionStatus = queryParams.vnp_TransactionStatus
      setOpenDialog(true)
      // if (responseCode === '00' && transactionStatus === '00') {
      //   toast('Đặt vé thành công', {
      //     classNames: {
      //       toast: 'bg-green-500',
      //       title: 'text-white',
      //     },
      //   })
      //   toast('Chọn xe bạn muốn mua vé', {
      //     classNames: {
      //       toast: 'bg-red-500',
      //       title: 'text-white',
      //     },
      //   })
      // } else {
      //   toast('Đặt vé thất bại', {
      //     classNames: {
      //       toast: 'bg-red-500',
      //       title: 'text-white',
      //     },
      //   })
      // }
    }
  }, [])

  useEffect(() => {
    if (data) {
      toast(data.message, {
        classNames: {
          toast: data.responseCode === 200 ? 'bg-green-500' : 'bg-red-500',
          title: 'text-white',
        },
      })
    }
    if (data?.data?.url) {
      window.location.href = data.data.url
    }
  }, [data])

  // const numberAnimation = useRef<HTMLDivElement | null>(null)

  // const animationDuration = 3000

  // const frameDuration = 1000 / 60

  // const totalFrames = Math.round(animationDuration / frameDuration)

  // const easeOutQuad = (t: number) => t * (2 - t)

  // const animateCountUp = useCallback(
  //   (el: any) => {
  //     let frame = 0
  //     const countTo = parseInt(el.innerHTML, 10)

  //     const counter = setInterval(() => {
  //       frame++

  //       const progress = easeOutQuad(frame / totalFrames)

  //       const currentCount = Math.round(countTo * progress)

  //       if (parseInt(el.innerHTML, 10) !== currentCount) {
  //         el.innerHTML = currentCount < 10 ? '0' + currentCount : currentCount
  //       }

  //       if (frame === totalFrames) {
  //         clearInterval(counter)
  //       }
  //     }, frameDuration)
  //   },
  //   [numberAnimation],
  // )
  // useEffect(() => {
  //   if (numberAnimation.current) {
  //     // Lấy tất cả phần tử có class là 'number' bên trong container
  //     const numberElements = Array.from(
  //       numberAnimation.current.getElementsByClassName('number'),
  //     )
  //     numberElements.forEach((it: any) => animateCountUp(it))
  //   }
  // }, [])

  return (
    <>
      <section className='h-[59.875rem] overflow-hidden p-[2.5rem_12.5rem_7.5rem_11.56rem] grid grid-cols-2 gap-[4.44rem]'>
        <div>
          <h2 className='w-[34.8125rem] text-[4rem] font-normal leading-[120%] tracking-[-0.08rem] transparent-text'>
            Đặt vé
          </h2>
          <p className='text-[1rem] font-normal mb-16 leading-[160%] tracking-[-0.03125rem]'>
            Đặt vé để nhận nhiều ưu đãi và đảm bảo luôn có vị trí để đỗ xe.
          </p>
          <Select
            onValueChange={(e: string) => setCar(e)}
            value={car}
          >
            <SelectTrigger className='w-full rounded-[3rem] border-[1px] border-solid border-primary'>
              <SelectValue placeholder='Select a car' />
            </SelectTrigger>
            <SelectContent>
              {carList?.map((it: any) => (
                <SelectItem
                  key={it.id}
                  value={it.id}
                >
                  {`${it.name} - ${it.code}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className={`text-white w-full rounded-md py-6 mt-4 mb-[5.12rem] ${
              buyTicketLoading && 'pointer-events-none'
            }`}
            onClick={() =>
              handleBuyTicket({
                ids: [
                  {
                    ticketTypeId: 2,
                    carId: car,
                  },
                ],
              })
            }
          >
            Đặt vé
          </Button>
          <div
            // ref={numberAnimation}
            className='grid grid-cols-2'
          >
            <div>
              <p className='text-[1rem] font-normal leading-[160%] text-[#929292] tracking-[-0.03125rem]'>
                Số lượng còn trống
              </p>
              <h4 className='text-[1.5rem] font-bold leading-[160%] text-[#5C5C5C]'>
                Tiếp tục mở rộng
              </h4>
              <div className='flex text-[6.25rem] font-bold leading-[150%] uppercase transparent-text'>
                <span className='number'>{value.parkInfor.slotAvailable}</span>
                <span className='text-[3.75rem] mt-[-2rem]'>+</span>
              </div>
            </div>
            <div>
              <p className='text-[1rem] font-normal leading-[160%] text-[#929292] tracking-[-0.03125rem]'>
                Số lượng ô đỗ
              </p>
              <h4 className='text-[1.5rem] font-bold leading-[160%] text-[#5C5C5C]'>
                Tiếp tục mở rộng
              </h4>
              <div className='flex text-[6.25rem] font-bold leading-[150%] uppercase transparent-text'>
                <span className='number'>{value.parkInfor.totalSlot}</span>
                <span className='text-[3.75rem] mt-[-2rem]'>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[36.6875rem] h-[46.875rem] relative flex justify-center items-center mapContainer'>
          <Image
            src={'/images/map1-1.png'}
            width={581}
            height={750}
            alt=''
            className='size-full absolute top-0 left-0 z-[1]'
          />
        </div>
      </section>
      <Dialog
        open={openDialog}
        onOpenChange={setOpenDialog}
      >
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>
              {queryParams.vnp_TransactionStatus === '00' &&
              queryParams.vnp_ResponseCode === '00'
                ? 'Thanh toán thành công'
                : 'Thanh toán thất bại'}
            </DialogTitle>
            <DialogDescription>
              {queryParams.vnp_TransactionStatus === '00' &&
              queryParams.vnp_ResponseCode === '00'
                ? 'Vào vé của bạn để xem thông tin chi tiết.'
                : 'Thanh toán thất bại. Vui lòng thử lại hoặc liên hệ hỗ trợ khách hàng nếu vấn đề vẫn tiếp diễn.'}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
