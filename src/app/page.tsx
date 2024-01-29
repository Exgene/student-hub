import Contacts from '@/components/Contacts';
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Socials from '@/components/Socials'

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Socials />
      <Contacts/>
    </div>
  )
}
