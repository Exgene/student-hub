import Contacts from '@/components/Contacts';
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Socials from '@/components/Socials'

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Socials />
      <Contacts/>
    </main>
  )
}
