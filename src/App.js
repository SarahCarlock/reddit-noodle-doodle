import React from 'react';
import './App.css';
import { Header } from './components/header/Header.js';
import { Footer } from './components/footer/Footer.js';
import { Counter } from './features/counter/counter';


function App() {
  return (
    <App className="App">
      <Header />
      <Counter />
        <p>Howdy</p>
      <Footer />
    </App>
  );
}

export default App;