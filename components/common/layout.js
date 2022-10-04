import Head from 'next/head'
import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Head>
        <title>Valley View Estates</title>
        <meta name="description" content="Valley View Estates, Saskatchewan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav />
        {children}
      </main>

      <Footer />
    </div>
  )
}
