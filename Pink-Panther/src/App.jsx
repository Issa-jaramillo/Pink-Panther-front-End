import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Card from './components/Card/Card';
import { products as initialProducts } from '../src/components/mocks/products.json';

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">PinkPanther</h1>
      </div>
      <div>
        <Card products={initialProducts} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;