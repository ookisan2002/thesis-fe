import Card from '@/components/Card/page'

const Widget = (props: {
  icon: JSX.Element
  title: string | number
  subtitle: string | number
}) => {
  const {icon, title, subtitle} = props
  return (
    <Card extra='!flex-row flex-grow items-center rounded-[1.25rem] p-[1.125rem]'>
      <div className='flex w-auto flex-row items-center'>
        <div className='rounded-full bg-lightPrimary p-3 dark:bg-navy-700'>
          <span className='flex items-center text-brand-500 dark:text-white'>
            {icon}
          </span>
        </div>
      </div>

      <div className=' ml-4 flex w-auto flex-col justify-center'>
        <p className='font-dm lg:text-sm font-medium text-gray-600 tablet:text-[1.75rem]'>{title}</p>
        <h4 className='lg:text-xl font-bold text-navy-700 dark:text-white tablet:text-[2.5rem]'>
          {subtitle}
        </h4>
      </div>
    </Card>
  )
}

export default Widget
