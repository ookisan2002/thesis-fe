import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-[40.125rem] xsm:h-[63rem] bg-white'>
      <div className='w-full flex h-[5.5rem] xsm:h-[4.125rem] bg-background-green justify-center items-center'>
        <div className='flex justify-between w-[51.0625rem] xsm:hidden'>
          <Link
            className='text-[1.125rem] font-bold leading-[120%] tracking-[-0.01125rem] text-white'
            href='#'
          >
            About Back Dai
          </Link>
          <Link
            className='text-[1.125rem] font-bold leading-[120%] tracking-[-0.01125rem] text-white'
            href='#'
          >
            Sustainable development
          </Link>
          <Link
            className='text-[1.125rem] font-bold leading-[120%] tracking-[-0.01125rem] text-white'
            href={'#'}
          >
            Products
          </Link>
          <Link
            className='text-[1.125rem] font-bold leading-[120%] tracking-[-0.01125rem] text-white'
            href={'#'}
          >
            Quality and factory
          </Link>
          <Link
            className='text-[1.125rem] font-bold leading-[120%] tracking-[-0.01125rem] text-white'
            href={'#'}
          >
            Blog
          </Link>
        </div>
        <div className='ml-[8.69rem] w-[25.25rem] xsm:w-full xsm:m-0  flex justify-between xsm:p-[0.5rem]'>
          <Link
            className=''
            href='#'
          >
            <Image
              src={'/images/LinkIn.svg'}
              width={55.862}
              height={55.862}
              alt=''
              className='size-[3.49138rem] xsm:size-[3.125rem] object-cover'
            />
          </Link>
          <Link
            className=''
            href='#'
          >
            <Image
              src={'/images/facebook.svg'}
              width={55.862}
              height={55.862}
              alt=''
              className='size-[3.49138rem] xsm:size-[3.125rem] object-cover'
            />
          </Link>
          <Link
            className=''
            href={'#'}
          >
            <Image
              src={'/images/X.png'}
              width={55.862}
              height={55.862}
              alt=''
              className='size-[3.49138rem] xsm:size-[3.125rem] object-cover'
            />
          </Link>
          <Link
            className=''
            href={'#'}
          >
            <Image
              src={'/images/youtube.png'}
              width={55.862}
              height={55.862}
              alt=''
              className='size-[3.49138rem] xsm:size-[3.125rem] object-cover'
            />
          </Link>
          <Link
            className=''
            href={'#'}
          >
            <Image
              src={'/images/pintersvg.svg'}
              width={55.862}
              height={55.862}
              alt=''
              className='size-[3.49138rem] xsm:size-[3.125rem] object-cover'
            />
          </Link>
          <Link
            className=''
            href={'#'}
          >
            <Image
              src={'/images/Amazon_logo 1.png'}
              width={55.862}
              height={55.862}
              alt=''
              className='size-[3.49138rem] xsm:size-[3.125rem] object-cover'
            />
          </Link>
        </div>
      </div>
      <div className='w-full h-[31.55rem] xsm:h-[58.88rem] relative xsm:p-[3.13rem_1rem]'>
        <div className='absolute top-[4.38rem] left-[7.5rem] xsm:relative xsm:top-0 xsm:left-0 w-[23.5rem] xsm:w-full xsm:border-b-[0.0625rem] xsm:border-[rgba(216, 216, 216, 0.76)] xsm:pb-[1.25rem] xsm:mb-[1.25rem]'>
          <div className='flex items-center h-fit mb-[2.25rem] xsm:mb-[1.5rem]'>
            <Image
              src='https://i.pinimg.com/564x/2b/31/f2/2b31f25a2616c2dff313afe4adcf149b.jpg'
              width={40}
              height={40}
              alt=''
              className='h-[3rem] w-[3rem] xsm:size-[3.125rem] rounded-full object-cover'
            />
            <a
              href='#'
              className='cursor-pointer text-[2.5rem] font-bold text-black ml-3'
            >
              Bach Dai
            </a>
          </div>
          <p className='text-[1.125rem] xsm:text-[0.875rem] font-semibold leading-[140%] xsm:leading-[150%] tracking-[-0.01125rem] mb-[0.88rem] xsm:mb-[0.75rem]'>
            Delivering Innovative Plastic Packaging That Protects and Preserves
            Your Products.
          </p>
          <p className='text-[1.125rem] xsm:text-[0.875rem] font-semibold leading-[140%] tracking-[-0.01125rem]'>
            GCN số GP/No: 01-1124/2018TCDL-GP LHQT
          </p>
        </div>
        <div className='flex absolute top-[6.63rem] left-[34rem] xsm:hidden'>
          <div className='w-[18.5rem]'>
            <h4 className='text-[1.25rem] font-bold leading-[120%] tracking-[-0.01125rem] mb-[1.69rem]'>
              CONTACT US
            </h4>
            <p className='flex text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              <Image
                src={'/images/Frame.png'}
                width={20}
                height={20}
                alt=''
                className='size-[1.25rem] mr-[0.75rem] object-cover'
              />
              Location: C3 Gian Khau industrial zone, Ninh Binh province, Viet
              Nam
            </p>
            <p className='flex text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                className='size-[1.25rem] mr-[0.75rem]'
              >
                <g clip-path='url(#clip0_3603_31777)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M17.6703 16.3874C17.5508 16.5065 17.4067 16.6589 17.2538 16.8201C16.8725 17.2248 16.396 17.728 16.0974 17.932C14.5263 19.0056 12.4243 18.4919 10.9376 17.8724C8.97622 17.0552 6.84087 15.5489 4.92355 13.6314C3.00444 11.7137 1.49828 9.57764 0.68107 7.61743C0.0623204 6.13033 -0.452473 4.02798 0.621305 2.4565C0.825211 2.15767 1.32953 1.68197 1.73375 1.29986C1.89547 1.14749 2.04664 1.00353 2.16618 0.884383C2.37839 0.673226 2.66558 0.554687 2.96494 0.554688C3.26431 0.554687 3.5515 0.673226 3.76371 0.884383L6.65454 3.77437C6.86558 3.98657 6.98405 4.27368 6.98405 4.57296C6.98405 4.87224 6.86558 5.15935 6.65454 5.37155L5.86704 6.15747C5.60404 6.41854 5.43237 6.75756 5.37759 7.12406C5.3228 7.49057 5.38782 7.86496 5.56297 8.19154C6.64613 10.2359 8.31832 11.9078 10.3629 12.9906C10.6894 13.1657 11.0637 13.2306 11.4301 13.1758C11.7965 13.1209 12.1353 12.9491 12.3962 12.6861L13.1818 11.9001C13.394 11.6889 13.6812 11.5704 13.9806 11.5704C14.2799 11.5704 14.5671 11.6889 14.7793 11.9001L17.6703 14.7906C17.8814 15.0027 17.9998 15.2898 17.9998 15.589C17.9998 15.8882 17.8814 16.1753 17.6703 16.3874Z'
                    fill='#16954F'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3603_31777'>
                    <rect
                      width='18'
                      height='18'
                      fill='white'
                      transform='translate(0 0.554688)'
                    />
                  </clipPath>
                </defs>
              </svg>
              (+84) 2293 651 648
            </p>
            <p className='flex text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                className='size-[1.25rem] mr-[0.75rem]'
              >
                <g clip-path='url(#clip0_3603_31777)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M17.6703 16.3874C17.5508 16.5065 17.4067 16.6589 17.2538 16.8201C16.8725 17.2248 16.396 17.728 16.0974 17.932C14.5263 19.0056 12.4243 18.4919 10.9376 17.8724C8.97622 17.0552 6.84087 15.5489 4.92355 13.6314C3.00444 11.7137 1.49828 9.57764 0.68107 7.61743C0.0623204 6.13033 -0.452473 4.02798 0.621305 2.4565C0.825211 2.15767 1.32953 1.68197 1.73375 1.29986C1.89547 1.14749 2.04664 1.00353 2.16618 0.884383C2.37839 0.673226 2.66558 0.554687 2.96494 0.554688C3.26431 0.554687 3.5515 0.673226 3.76371 0.884383L6.65454 3.77437C6.86558 3.98657 6.98405 4.27368 6.98405 4.57296C6.98405 4.87224 6.86558 5.15935 6.65454 5.37155L5.86704 6.15747C5.60404 6.41854 5.43237 6.75756 5.37759 7.12406C5.3228 7.49057 5.38782 7.86496 5.56297 8.19154C6.64613 10.2359 8.31832 11.9078 10.3629 12.9906C10.6894 13.1657 11.0637 13.2306 11.4301 13.1758C11.7965 13.1209 12.1353 12.9491 12.3962 12.6861L13.1818 11.9001C13.394 11.6889 13.6812 11.5704 13.9806 11.5704C14.2799 11.5704 14.5671 11.6889 14.7793 11.9001L17.6703 14.7906C17.8814 15.0027 17.9998 15.2898 17.9998 15.589C17.9998 15.8882 17.8814 16.1753 17.6703 16.3874Z'
                    fill='#16954F'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3603_31777'>
                    <rect
                      width='18'
                      height='18'
                      fill='white'
                      transform='translate(0 0.554688)'
                    />
                  </clipPath>
                </defs>
              </svg>
              (+84) 2293 651 648
            </p>
            <p className='flex text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                className='size-[1.25rem] mr-[0.75rem]'
              >
                <g clip-path='url(#clip0_3603_31777)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M17.6703 16.3874C17.5508 16.5065 17.4067 16.6589 17.2538 16.8201C16.8725 17.2248 16.396 17.728 16.0974 17.932C14.5263 19.0056 12.4243 18.4919 10.9376 17.8724C8.97622 17.0552 6.84087 15.5489 4.92355 13.6314C3.00444 11.7137 1.49828 9.57764 0.68107 7.61743C0.0623204 6.13033 -0.452473 4.02798 0.621305 2.4565C0.825211 2.15767 1.32953 1.68197 1.73375 1.29986C1.89547 1.14749 2.04664 1.00353 2.16618 0.884383C2.37839 0.673226 2.66558 0.554687 2.96494 0.554688C3.26431 0.554687 3.5515 0.673226 3.76371 0.884383L6.65454 3.77437C6.86558 3.98657 6.98405 4.27368 6.98405 4.57296C6.98405 4.87224 6.86558 5.15935 6.65454 5.37155L5.86704 6.15747C5.60404 6.41854 5.43237 6.75756 5.37759 7.12406C5.3228 7.49057 5.38782 7.86496 5.56297 8.19154C6.64613 10.2359 8.31832 11.9078 10.3629 12.9906C10.6894 13.1657 11.0637 13.2306 11.4301 13.1758C11.7965 13.1209 12.1353 12.9491 12.3962 12.6861L13.1818 11.9001C13.394 11.6889 13.6812 11.5704 13.9806 11.5704C14.2799 11.5704 14.5671 11.6889 14.7793 11.9001L17.6703 14.7906C17.8814 15.0027 17.9998 15.2898 17.9998 15.589C17.9998 15.8882 17.8814 16.1753 17.6703 16.3874Z'
                    fill='#16954F'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3603_31777'>
                    <rect
                      width='18'
                      height='18'
                      fill='white'
                      transform='translate(0 0.554688)'
                    />
                  </clipPath>
                </defs>
              </svg>
              Email: info@ksvn.com.vn
            </p>
          </div>
          <div className='w-[18.5rem] mx-[3rem]'>
            <h4 className='text-[1.25rem] font-bold leading-[120%] tracking-[-0.01125rem] mb-[1.69rem]'>
              CUSTOMER SUPPORT
            </h4>
            <p className='flex cursor-pointer text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              Usage rules
            </p>
            <p className='flex cursor-pointer text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              Warranty - Return
            </p>
            <p className='flex cursor-pointer text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              Payments
            </p>
            <p className='flex cursor-pointer text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              Shipping and delivery policy
            </p>
            <p className='flex cursor-pointer text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              Information security policy
            </p>
          </div>
          <div className='w-[18.5rem]'>
            <h4 className='text-[1.25rem] font-bold leading-[120%] tracking-[-0.01125rem] mb-[1.25rem]'>
              CONTACT FOR ADVICE
            </h4>
            <p className='flex text-[1.125rem] font-semibold leading-[140%] tracking-[-0.01125rem] mb-[2.25rem]'>
              We will update the fastest tour offers for you
            </p>
            <div className='flex'>
              <input
                className='w-[14.75rem] text-text-grey border-b-[0.0625rem] border-[rgb(29,29,29,0.5)] text-[1.125rem] font-bold leading-[120%] tracking-[-0.01125rem] '
                type='email'
                placeholder='Your email'
              />
              <div className='group size-[3.25rem] overflow-hidden'>
                <div className='flex w-max transition-all duration-500 -translate-x-1/2 group-hover:translate-x-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='49'
                    viewBox='0 0 48 49'
                    fill='none'
                    className='rotate-45 size-[3.25rem]'
                  >
                    <path
                      d='M14.3701 34.3735L34.1162 14.6274M34.1162 14.6274H18.3193M34.1162 14.6274V30.4243'
                      stroke='url(#paint0_linear_3612_27142)'
                      stroke-width='2.96191'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_3612_27142'
                        x1='14.3701'
                        y1='24.5005'
                        x2='34.1162'
                        y2='24.5005'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#15A256' />
                        <stop
                          offset='1'
                          stop-color='#2C7234'
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='49'
                    viewBox='0 0 48 49'
                    fill='none'
                    className='rotate-45 size-[3.25rem]'
                  >
                    <path
                      d='M14.3701 34.3735L34.1162 14.6274M34.1162 14.6274H18.3193M34.1162 14.6274V30.4243'
                      stroke='url(#paint0_linear_3612_27142)'
                      stroke-width='2.96191'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_3612_27142'
                        x1='14.3701'
                        y1='24.5005'
                        x2='34.1162'
                        y2='24.5005'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#15A256' />
                        <stop
                          offset='1'
                          stop-color='#2C7234'
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full sm:hidden'>
          <div className=' xsm:border-b-[0.0625rem] xsm:border-[rgba(216, 216, 216, 0.76)] xsm:pb-[1.25rem] xsm:mb-[1.25rem] flex justify-between'>
            <div className='grid grid-cols-1 gap-6 w-[10.6875rem]'>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                ABOUT VNK’s
              </p>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                SUSTAINABLE DEVELOPMENT
              </p>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                PRODUCTS
              </p>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                QUALITY AND FACTORY
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 w-[8.4375rem]'>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                blog
              </p>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                contact
              </p>
              <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
                CAREER OPPRTUNITIES
              </p>
            </div>
          </div>
          <div className='w-full xsm:border-b-[0.0625rem] xsm:border-[rgba(216, 216, 216, 0.76)] xsm:pb-[1.25rem] xsm:mb-[1.25rem] grid grid-cols-1 gap-6 '>
            <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
              Usage rules
            </p>
            <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
              Warranty - Return
            </p>
            <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
              Payments
            </p>
            <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
              Shipping and delivery policy
            </p>
            <p className='uppercase text-[0.75rem] tracking-[-0.0075rem] font-semibold leading-[120%]'>
              Information security policy
            </p>
          </div>
          <div className=' xsm:border-b-[0.0625rem] xsm:border-[rgba(216, 216, 216, 0.76)] xsm:pb-[0.5rem] xsm:mb-[1.25rem] '>
            <h4 className='uppercase text-[1rem] tracking-[-0.02rem] leading-[150%] font-bold'>
              Contact for advice
            </h4>
            <p className='text-[0.875rem] leading-[150%] font-normal mt-[0.5rem] mb-[1.5rem]'>
              We will update the fastest tour offers for you
            </p>
            <div className='flex w-full'>
              <input
                type='text'
                placeholder='Your email'
                className='flex-1 text-text-grey border-0 text-[0.875rem] font-normal leading-[150%] tracking-[-0.00875rem] '
              />
              <svg
                className='size-[1.875rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='54'
                height='52'
                viewBox='0 0 54 52'
                fill='none'
              >
                <path
                  d='M20 23.9988C18.8954 23.9988 18 24.8942 18 25.9988C18 27.1033 18.8954 27.9988 20 27.9988L20 23.9988ZM20 27.9988H52L52 23.9988H20L20 27.9988Z'
                  fill='#16954F'
                />
                <path
                  d='M39.0195 13.0232L51.2863 25.29C51.6768 25.6805 51.6768 26.3136 51.2863 26.7042L39.0195 38.9709'
                  stroke='#16954F'
                  stroke-width='4'
                  stroke-linecap='round'
                />
              </svg>
            </div>
          </div>
          <div className=' xsm:border-b-[0.0625rem] xsm:border-[rgba(216, 216, 216, 0.76)] xsm:pb-[1.62rem] xsm:mb-[1.62rem] flex items-center justify-between'>
            <h4 className='text-[0.875rem] leading-[140%] font-semibold tracking-[-0.00875rem] uppercase'>
              address
            </h4>
            <p className='text-[0.75rem] leading-[150%] font-normal w-[15.8125rem]'>
              Location: C3 Gian Khau industrial zone, Ninh Binh province, Viet
              Nam
            </p>
          </div>
          <div className=' flex items-center justify-between'>
            <h4 className='text-[0.875rem] leading-[140%] font-semibold tracking-[-0.00875rem] uppercase'>
              contact
            </h4>
            <div className='w-[15.8125rem] grid grid-cols-1 gap-[0.62rem]'>
              <p className='text-[0.75rem] leading-[150%] font-normal'>
                (+84) 2293 651 648
              </p>
              <p className='text-[0.75rem] leading-[150%] font-normal'>
                (+84) 2293 651 648
              </p>
              <p className='text-[0.75rem] leading-[150%] font-normal'>
                Email: info@ksvn.com.vn
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
