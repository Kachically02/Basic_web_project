import React from 'react'
import Navigation from './Navigation'
import Homepage from './Homepage'
import OurClient from './OurClient'
import HelpingLocal from './HelpingLocal'
import About from './About'
import Brand from './Brand'
import Blog from '../components/Blog/Blog'
import Contacts from './Contacts'
import Footer from './Footer'

function Index() {
  return (
    <div>
    <Navigation/>
    <Homepage/>
    <OurClient/>
    <HelpingLocal/>
    <About/>
    <Brand/>
    <Blog/>
    <Contacts/>
    <Footer />
    
    </div>
  )
}

export default Index