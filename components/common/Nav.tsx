import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from './../../public/logo.png'
import motto from './../../public/motto.png'

type Props = {}

export default function Nav({ }: Props) {
  return (
    <nav className="sticky top-0 z-40 flex flex-row p-2 justify-between w-full h-32 bg-white">
      {/* Logo and Motto */}
      <div className="flex flex-row">
        <div>
          <Image src={logo} alt="Valley View Logo" className='' height={100} layout="fixed" />
        </div>
        <div className='mt-8' >
          <Image src={motto} alt="Valley View Motto" height="40" layout="fixed" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex flex-row self-end">
        {/* About  */}
        <div className='nav-link'>
          About
        </div>
        {/* Map and Lots */}
        <div className='nav-link'>
          Map and Lots
        </div>
        {/* Photos  */}
        <div className='nav-link'>
          Photos
        </div>
        {/* Contact  */}
        <div className='nav-link'>
          Contact
        </div>
        {/* Community  */}
        <div className='nav-link'>
          Community
        </div>
      </div>
    </nav>
  )
}
