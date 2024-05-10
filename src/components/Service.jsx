import React from 'react';

export const Service = ({service}) => {

  return (
        <div className='flex flex-col justify-between gap-4 p-2 bg-gradient-to-b from-right to-left p-4 max-w-[80ch] shadow-xl  '>
          <div className='text-2xl border-b border-solid border-orilla'>{service.title}</div>
          <div className=''>{service.description}</div>
        </div>
  );
}

