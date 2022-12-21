import React from 'react'
import Image from 'next/image'

type Props = {}

export default function HomeComponent({ }: Props) {
  return (
    <div className='h-screen'>
      <div className='w-screen'>
        <Image src='/./../public/Home Image.png' layout='responsive' width={250} height={100} alt="Photo of beautiful green valley" />
      </div>
      <h1 className='italic text-center mx-auto w-2/3 my-10'>&apos;Valley View Estates:
        Tranquil living in the beautiful Qu&apos;Appelle valley, 22 miles from Regina.&apos;</h1>
      <div className="flex flex-row justify-between w-1/3 mx-auto">
        <button className='rounded-md bg-fruit-salad-400 p-3 text-white w-32 shadow-slate-300 shadow-md'>View Lots</button>
        <button className='text-fruit-salad-700 underline'>Learn More...</button>
      </div>
    </div>
  )
}
