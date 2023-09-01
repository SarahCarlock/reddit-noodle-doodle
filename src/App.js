import React from 'react';
import './App.css';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
        <p>Howdy</p>
      <Footer />
    </div>
  );
}

export default App;