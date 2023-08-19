import React from 'react';
import { useState, useEffect } from 'react';

const island = require('../../images/island.jpg');



export default function Homepage() {

  //cursor animation
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prevVisible => !prevVisible);
    }, 950);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const cursorStyle = {
    display: cursorVisible ? 'inline-block' : 'none'
  };
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
<p className="tracking-widest font-handjet font-bold absolute top-14  text-4xl text-center leading-[3.5rem]" ><span id="cursor" style={cursorStyle} class="before:w-3 before:h-6 before:bg-stone-600 before:inline-block animate-cursorAnimation "></span>Hello.
  <br />My name is Franziska Kissling.<br /> I love to code.
</p>
</div>

   
  )
}







