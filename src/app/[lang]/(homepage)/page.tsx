
import Banner from '@/Section/Homepage/Banner/page'
import WhyChooseUs from '@/Section/Homepage/WhyChooseUs/page'
import AdvantageSection from '@/Section/Homepage/Advantage/page'
import CustomerReviewSection from '@/Section/Homepage/CustomerReviewSection/page'
import ParkingOptionSection from '@/Section/Homepage/ParkingOptionSection/page'
import getData from '@/lib/getData'

export default async function Home() {
  const [ticketType] = await Promise.all([getData({api: '/guest/ticket-type'})])
  return (
    <main className='flex flex-col relative'>
      <Banner />
      <AdvantageSection />
      <WhyChooseUs />
      <CustomerReviewSection />
      <ParkingOptionSection ticketTypeList={ticketType?.data || []} />
    </main>
  )
}
