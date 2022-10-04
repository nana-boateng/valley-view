import Head from 'next/head'
import Image from 'next/image'

// Components
import Nav from '../components/common/Nav'

import home from './../public/Home Image.png'

export default function Index() {
  return (
    <div className="h-screen">
      <Head>
        <title>Valley View Estates</title>
        <meta name="description" content="Valley View Estates, Saskatchewan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav />
        <Image src={home} layout='intrinsic' alt="Photo of beautiful green valley" />  
        <h1 className='font-thin italic text-center m-4'>&apos;Valley View Estates: Tranquil living in the beautiful Qu'Appelle valley, 22 miles from Regina.&apos;</h1>
        <div className="flex flex-row justify-between my-10 w-1/3 mx-auto">
         <button className='rounded-md bg-fruit-salad-400 p-3'>View Lots</button> 
         <button className='text-fruit-salad-700 underline'>Learn More...</button> 
        </div>
        <div><span></span></div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
