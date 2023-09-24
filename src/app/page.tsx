import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex relative">
      <div className='bg-white w-1/2 h-screen'>
        <span>App Developer</span>
      </div>
      <Image 
        src='/img/priyanshusaini.png'
        width={400}
        height={400}
        alt='Priyanshu'
        className='w-[28rem] h-[28rem] absolute left-1/2 transform -translate-x-1/2 bottom-0'
      />
      <div className='bg-sky-950 w-1/2'>
        <span className=''>App Developer</span>
      </div>
    </main>
  )
}
