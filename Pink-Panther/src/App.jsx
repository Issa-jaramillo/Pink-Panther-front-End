import React from 'react'
import './App.css'
import { DetailPage } from './components/DetailPage/DetailPage'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
    <div>
      <h1>PinkPanther</h1>
      </div>
    <div>
      <DetailPage/>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}

export default App