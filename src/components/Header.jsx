// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0">
      <h1 className="font-bold lg:text-2xl xl:text-3xl text-center">Conceptos Consulting Company</h1>
      <nav>
        <ul className="flex flex-row justify-around items-center">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
