// src/components/Services.js
import React from 'react';
import { Service } from './Service';

export const Services = () => {
  const services = [
    {
      title: 'User Interface Development',
      description: 'All the UI frameworks are subject to our dominion.'
    },
    {
      title: 'API Development',
      description: 'NodeJS is our vassel under the lordship of NestJS.'
    },
    {
      title: 'Database Development',
      description: 'We ride PostgreSQL for it is the mightiest of breeds but we have other steeds in our stable.'
    },
    {
      title: 'Open Source Utilization',
      description: 'We pillage the open source community, taking the choicest of spoils for our own treasuries.'
    }
  ];

  return (
    <section className='flex flex-row justify-around flex-wrap gap-8'>
      {services.map(s => (
        <Service key={s.title} service={s}></Service>
      ))}
    </section>
  );
};

