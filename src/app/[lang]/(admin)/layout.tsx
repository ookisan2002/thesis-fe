import {ReactNode} from 'react'
import AdminSideBar from '@/components/AdminSideBar/page'

export default async function layout({
  children,
}: {
  params: {lang: string}
  children: ReactNode
}) {
  return (
    <>
			<AdminSideBar/>
      {children}
    </>
  )
}
