import React from 'react';
import LeafLetMap from '../components/LeafLetMap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HourProgress from '../components/HourProgress';
import './MainPage.css'


function MainPage() {
  return(
    <section data-testid="LeafMap" className="container">
        <Header />
        <LeafLetMap />
        <HourProgress />
        <Footer />
    </section>
  )
}


export default MainPage