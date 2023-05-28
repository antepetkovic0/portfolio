import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
      <div className='flex w-full items-start justify-between'>
        <div className='w-1/2'>image</div>
        <div className='w-1/2 items-center'>
          <h1 className='text-8xl font-bold'>Turning vision into reality with code.</h1>
          <p className='my-4'>As a skilled full-stack developer, I am committed to transforming ideas into cutting-edge web applications. Explore my latest projects and articles, showcasing my expertise in web development.</p>
        </div>
      </div>
    </main>
  )
}
