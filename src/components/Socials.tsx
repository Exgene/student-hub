import Image from 'next/image'
import { Separator } from './ui/separator'

const socials = [
  '/logo/1.svg',
  '/logo/2.svg',
  '/logo/3.svg',
  '/logo/4.svg',
  '/logo/5.svg',
  '/logo/6.svg',
]

const Socials = () => {
  return (
    <section className="text-primary bg-foreground" id="socials">
      <div className="w-full bg-primary text-foreground text-center p-16 flex sm:flex-row flex-col justify-center items-center gap-x-10 gap-y-6">
        <div>
          <h2 className="sm:text-4xl text-xl text-accent font-semibold">
            1000+
          </h2>
          <p className="font-extralight text-xs sm:text-base">
            College Students
          </p>
        </div>
        <div className="sm:w-[1px] w-16 h-[1px] bg-gray-300 sm:h-16" />
        <div>
          <h2 className="sm:text-4xl text-xl text-accent font-semibold">4</h2>
          <p className="font-extralight text-xs sm:text-base">Team Members</p>
        </div>
        <div className="sm:w-[1px] w-16 h-[1px] bg-gray-300 sm:h-16" />
        <div>
          <h2 className="sm:text-4xl text-xl text-accent font-semibold">5+</h2>
          <p className="font-extralight text-xs sm:text-base">Backing Clubs</p>
        </div>
        <div className="sm:w-[1px] w-16 h-[1px] bg-gray-300 sm:h-16" />
        <div>
          <h2 className="sm:text-4xl text-xl text-accent font-semibold">0</h2>
          <p className="font-extralight text-xs sm:text-base">
            Fucks I Give About This Shit
          </p>
        </div>
      </div>
      <h1 className="text-center mt-6 text-xl">Our Clubs</h1>
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
    </section>
  )
}

export default Socials
