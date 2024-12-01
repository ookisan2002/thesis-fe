import React from 'react'
import './styles.css'

interface CustomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  icon?: boolean
  buttonClass?:string
}

export default function CustomeButton({
  content,
  icon = false,
  buttonClass='',
  ...props
}: CustomeButtonProps) {
  return (
    <button
      className={`see_more_btn ${buttonClass}`}
      {...props}
    >
      <span>
        {content}
        {icon && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <path
              d='M7.5 17.7463L17.5 7.74634M17.5 7.74634H9.5M17.5 7.74634V15.7463'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        )}
      </span>
    </button>
  )
}
