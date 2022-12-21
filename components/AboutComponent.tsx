import React from 'react'
import Image from 'next/image'

import about1 from './../public/About Image 1.png'
import pdf from './../public/PDF Image.png'

type Props = {}

export default function AboutComponent({ }: Props) {
  return (
    <>
      <h1 className='font-bold text-center text-4xl'>About</h1>
      <br />
      {/* PAGE ONE */}
      <div className='flex flex-row my-10'>
        <Image src={about1} height={512} weight={782} alt="Photo of valley in light orange hue" />
        <div className='flex flex-col justify-evenly w-2/3 px-10 py-10 text-center align-middle'>
          <p className='text-3xl italic '>
            Valley View Estates is southern Saskatchewan&apos;s
            newest acreage size sub-division located in the
            beautiful Qu&apos;Appelle Valley.
          </p>
          <br />
          <p className='text-3xl italic '>
            Only 22 miles from Regina. 2 miles west of Craven on paved highway. 1 mile from Last Mountain Lake.
          </p>
          <a href="" className='text-xl italic text-spindle-900 underline align-middle'>
            Download Information Package
            <Image src={pdf} width={17} height={20} alt='Icon representing PDF' />
          </a>
        </div>
      </div>
    </>
  )
}
