import React from 'react'
import Image from 'next/image'

type Props = {}

export default function ContactComponent({ }: Props) {
  return (
    <div className='flex flex-row'>
      <div>
        <div className='text-3xl font-bold'>For more information or to arrange a tour, contact Chris Parrott</div>
        <div>

        </div>
      </div>
      <Image src='/./../public/contact-image.png' width={430} height={143} alt='Portrait of our travel agent Chris' />
    </div>
  )
}
