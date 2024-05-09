// src/App.js
import React from 'react';
import {Header} from './components/Header';
import {Services} from './components/Services';
import {Summary} from './components/Summary';

const App = () => {
  return (
    <div className="w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-stretch" style={{ backgroundImage: 'url(conceptos-hero.jpg)' }}>
      <div className="bg-gradient-to-r from-left to-right grow w-full max-h-[100vh] overflow-y-scroll flex flex-col justify-between items-stretch">
        <Header></Header>
          <main className="w-full grow max-w-screen-2xl mx-auto flex flex-col justify-around gap-16 items-stretch p-16">
            <Summary></Summary>
            <Services></Services>
          </main>
      </div>
    </div>
  );
}

export default App;
