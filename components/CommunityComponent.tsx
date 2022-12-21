import React from 'react'
import Image from 'next/image'

type Props = {}

export default function CommunityComponent({ }: Props) {
  return (
    <div className='h-screen flex flex-col justify-around'>
      <br />
      <br />
      <div className='mt-10'>
        <h1 className='text-3xl text-center font-bold'>Valley View is proud to support local businesses</h1>
        <h2 className='text-center font-bold'>Check back for upcoming events</h2>
      </div>
      <a href="" className='mx-auto'>
        <Image src='/./../public/FB Logo.png' width={430} height={143} alt='Facebook Logo' />
      </a>
    </div>

  )
}
