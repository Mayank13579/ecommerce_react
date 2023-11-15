import React from 'react'
import Hero from '../components/hero/Hero'
import Offers from '../components/offers/Offers.jsx'
import Popular from '../components/Popular/Popular'
import NewCollections from '../components/newcollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'
const Shop = () => {
 

  return (
    <div>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
    </div>
  )
}

export default Shop