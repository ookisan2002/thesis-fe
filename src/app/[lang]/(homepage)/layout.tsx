import FloatButton from '@/components/FloatButton/page'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import {ReactNode} from 'react'

export default async function layout({
  children,
}: {
  params: {lang: string}
  children: ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatButton />
    </>
  )
}
