// src/App.js
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto bg-blue-200">
        <Header />
        <main className="w-full">
          <Services />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
