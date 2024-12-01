import React from 'react'
// import './styles.css'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelClass?: string
  inputClass?: string
  labelContent: string
}

export default function FormInput({
  labelClass,
  inputClass,
  labelContent,
  ...props
}: FormInputProps) {
  return (
    <div
      id='input'
      className='relative'
    >
      <input
        type='text'
        id='floating_outlined'
        className={`${inputClass} block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-black focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]`}
        placeholder={labelContent}
        value=''
        {...props}
      />
      <label
        htmlFor='floating_outlined'
        className={`peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-black peer-focus:text-black peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${labelClass}`}
      >
        {labelContent}
      </label>
    </div>
  )
}
