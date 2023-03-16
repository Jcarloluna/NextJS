import Head from 'next/head';
import 'react-bootstrap'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'


export default function Home() {
  return (
    <div className='container-fluid ' >
      <Head>
        <title>JAMM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero/>
    </div>
  )
}
