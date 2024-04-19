import React from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { products as initialProducts } from '../src/components/mocks/products.json';
import Cards from './components/Cards/Cards';

function App() {

  return (
    <>
    <div>
      <h1>PinkPanther</h1>
      </div>
    <div>
    <Cards products={initialProducts} />
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}

export default App