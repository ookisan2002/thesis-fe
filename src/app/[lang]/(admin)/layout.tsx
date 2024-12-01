import FloatButton from '@/components/FloatButton/page'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import {ReactNode} from 'react'
import AdminSideBar from '@/components/AdminSideBar/page'

export default async function layout({
  params,
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
