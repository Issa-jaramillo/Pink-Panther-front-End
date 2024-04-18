import React from 'react'
import './App.css'
import { DetailPage } from './components/DetailPage/DetailPage'
import { Footer } from './components/Footer/Footer'

import Navbar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';

function App() {

  return (
    <>
    <div>
      <h1>PinkPanther</h1>
      </div>
    <div>
      <DetailPage />
      <Navbar />
      <Carousel />
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}

export default App
