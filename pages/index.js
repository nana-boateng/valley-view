import Head from 'next/head'

// Components
import Nav from '../components/common/Nav'

import HomeComponent from '../components/HomeComponent'
import AboutComponent from '../components/AboutComponent'
import MapsComponent from '../components/MapsComponent'
import LotsComponent from '../components/LotsComponent'
import PhotosComponent from '../components/PhotosComponent'
import ContactComponent from '../components/ContactComponent'
import CommunityComponent from '../components/CommunityComponent'

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
        <HomeComponent />

        {/* ABOUT */}
        <AboutComponent />

        {/* MAP AND LOTS */}
        <MapsComponent />

        {/* MAP AND LOTS */}
        <LotsComponent />

        {/* PHOTOS */}
        <PhotosComponent />

        {/* CONTACT */}
        <ContactComponent />

        {/* COMMUNITY */}
        <CommunityComponent />
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
