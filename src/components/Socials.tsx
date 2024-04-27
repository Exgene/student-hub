import Image from 'next/image'
import { MaskContainer } from './ui/mask-effect'
import { InfiniteMovingCards } from './ui/moving-cards'
import { Separator } from './ui/separator'

const mockClubs = Array.from({ length: 6 }, (_, index) => ({
  name: `Club ${index + 1}`,
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  imgURL: `/logo/${index + 1}.svg`,
}))

const Socials = () => {
  return (
    <section className="text-black bg-yellow-500" id="socials">
      <h1 className="text-center text-5xl font-medium p-10">Our Clubs</h1>
      <div className="relative w-full flex flex-col antialiased items-center justify-center overflow-hidden">
        <InfiniteMovingCards items={mockClubs} direction="right" speed="slow" />
      </div>
      {/* <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold">
            Hover or Click here to reveal the clubs we are proudly collaborating
            with!
          </p>
        }
        className="h-[40rem] rounded-md"
      >
 
        <div className="w-full flex justify-center gap-40 flex-wrap max-w-5xl mx-auto p-16 mt-10">
          {socials.map((link, index) => (
            <div
              className="flex justify-center relative items-center"
              key={index}
            >
              <Image src={link} alt="logo" width={120} height={50} />
              <Separator className="absolute -top-20 bg-[#4e4e4e]" />
              <Separator className="absolute w-[1px] h-20 -left-20 bg-[#4e4e4e]" />
              <Separator className="absolute w-[1px] h-20 -right-20 bg-[#4e4e4e]" />
            </div>
          ))}
        </div>
      </MaskContainer> */}
    </section>
  )
}

export default Socials
