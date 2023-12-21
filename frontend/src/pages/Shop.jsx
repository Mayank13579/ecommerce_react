import React from 'react'
import Hero from '../components/hero/Hero'
import Offers from '../components/offers/Offers.jsx'
import Popular from '../components/Popular/Popular'
import NewCollections from '../components/newcollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'
// import {ContactUs}  from '../components/ContactUs/ContactUs.jsx';

const Shop = () => {
 

  return (
    <div>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
    {/* <ContactUs/> */}
    </div>
  )
}

export default Shop