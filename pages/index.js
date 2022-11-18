import Head from 'next/head'
import Image from 'next/image'

// Components
import Nav from '../components/common/Nav'

import home from './../public/Home Image.png'
import pdf from './../public/PDF Image.png'
import about1 from './../public/About Image 1.png'
import fblogo from './../public/FB Logo.png'

export default function Index() {
  return (
    <div >
      <Head>
        <title>Valley View Estates</title>
        <meta name="description" content="Valley View Estates, Saskatchewan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <Nav />
        {/* HOME */}
        <div className='h-screen'>
          <div className='w-screen'>
            <Image src={home} layout='responsive' height={600} alt="Photo of beautiful green valley" />  
          </div>
          <h1 className='italic text-center mx-auto w-2/3 my-10'>&apos;Valley View Estates: 
            Tranquil living in the beautiful Qu&apos;Appelle valley, 22 miles from Regina.&apos;</h1>
          <div className="flex flex-row justify-between w-1/3 mx-auto">
            <button className='rounded-md bg-fruit-salad-400 p-3 text-white w-32 shadow-slate-300 shadow-md'>View Lots</button> 
            <button className='text-fruit-salad-700 underline'>Learn More...</button> 
          </div>
        </div>

        {/* ABOUT */}
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
                    <Image src={pdf} width={17} height={20} alt='Icon representing PDF'/>
                  </a>
                </div>
            </div>  
          Article Component
          Download link for PDF
          {/* PAGE TWO */}
          

        {/* MAP AND LOTS */}

        {/* PHOTOS */}

        {/* CONTACT */}

        {/* COMMUNITY */}
        <div className='h-screen flex flex-col justify-around'>
          <br />
          <br />
          <div className='mt-10'>
            <h1 className='text-3xl text-center font-bold'>Valley View is proud to support local businesses</h1>
            <h2 className='text-center font-bold'>Check back for upcoming events</h2>
          </div>
        <a href="" className='mx-auto'>
          <Image src={fblogo} width={430} height={143} alt='Facebook Logo'/>
        </a>
</div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
