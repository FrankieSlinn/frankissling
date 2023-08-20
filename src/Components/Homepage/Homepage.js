import React from 'react';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const island = require('../../images/island.jpg');



export default function Homepage() {



  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      <p id="intro" className="tracking-widest font-handjet font-bold absolute top-36 text-4xl text-center leading-[3.5rem]">
      <Typewriter   words={["Hello. I'm Franziska and I love to code."]}
            cursor
            cursorStyle='|'
            typeSpeed={150} />
      </p>
    </div>
  );
}







