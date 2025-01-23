/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

const Button = ({ content }:any) => {


  return (
    <button
     className='_button'
    >
      {content}
    </button>
  );
};

export default Button;

