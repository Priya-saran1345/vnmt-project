/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

const Button = ({ content, href }: any) => {


  return (
    <a
      className='_button'
      href={href ? href : "/"}
    >
      {content}
    </a>
  );
};

export default Button;

