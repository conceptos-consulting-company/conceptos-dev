import React from 'react';

export const Summary = () => {
  const service = {
    title: 'Embattled Champions of Custom Software Development',
    description: 'Our weapon of choice is JavaScript, with which we subdue data and strike down manual processes.'
  };

  return (
    <div className='flex flex-col justify-between items-center gap-4 p-2'>
      <div className='text-4xl text-center border-b border-solid border-orilla p-2'>{service.title}</div>
      <div className='text-3xl text-center'>{service.description}</div>
    </div>
  );
}

