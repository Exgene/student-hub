import Image from 'next/image'

const Contacts = () => {
  return (
    <section className="text-primary min-h-screen">
      <div className="h-72 border relative bg-black flex flex-col justify-center items-start px-6 sm:px-52 lg:px-96 gap-2">
        {/* <Image
          src={'/18703.jpg'}
          alt="contact image"
          fill
          className='object-cover bg-black'
        /> */}
        <h2 className="text-4xl md:text-6xl font-bold">Contact</h2>
        <p className='font-medium text-base md:text-xl'>
          Please feel free to call or email us, or use our contact form to get
          in touch with us. We look forward to hearing from you
        </p>
      </div>
    </section>
  )
}

export default Contacts
