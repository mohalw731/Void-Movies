import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Platforms from '../components/ui/Platforms'
import Grid from '../components/ui/Grid'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Platforms/>
      <Grid/>
      <Footer/>
    </>
  )
}

export default Home
