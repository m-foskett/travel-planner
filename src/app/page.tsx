import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className='flex flex-col'>
        <h1 className='text-white font-semibold text-2xl'>Travel Planner</h1>
        <h2 className='text-white font-semibold pt-3'>Choose a starting date...</h2>
        <h2 className='text-white font-semibold pt-3'>Choose an end date...</h2>
      </div>
    </main>
  )
}
