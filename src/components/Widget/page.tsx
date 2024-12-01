import Card from '@/components/Card/page'


const Widget = (props: {
	icon: JSX.Element;
	title: string;
	subtitle: string;
}) => {
	const {icon, title, subtitle} = props
	return (
		<Card extra="!flex-row flex-grow items-center rounded-[1.25rem]">
			<div className="flex h-[5.625rem] w-auto flex-row items-center">
				<div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
				</div>
			</div>

			<div className="h-50 ml-4 flex w-auto flex-col justify-center">
				<p className="font-dm text-sm font-medium text-gray-600">{title}</p>
				<h4 className="text-xl font-bold text-navy-700 dark:text-white">
					{subtitle}
				</h4>
			</div>
		</Card>
	)
}

export default Widget