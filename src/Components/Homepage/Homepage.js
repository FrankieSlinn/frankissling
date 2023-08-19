import React from 'react';
import { useState, useEffect } from 'react';

const island = require('../../images/island.jpg');



export default function Homepage() {

  const [cursorVisible, setCursorVisible] = useState(true);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    // Animation for cursor effect
    const cursorAnimationInterval = setInterval(() => {
      setCursorVisible(prevVisible => !prevVisible);
    }, 500);

    // Show the intro after 4 seconds
    const showIntroTimer = setTimeout(() => {
      setCursorVisible(false);
      setIntroVisible(true);
      clearInterval(cursorAnimationInterval); // Clear the cursor animation interval
    }, 3500);

    return () => {
      clearInterval(cursorAnimationInterval);
      clearTimeout(showIntroTimer);
    };
  }, []);

  // Cursor display style
  const cursorStyle = {
    display: cursorVisible ? 'inline-block' : 'none'
  };

  // Intro display style
  const introStyle = {
    display: introVisible ? 'inline-block' : 'none'
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      <p id="intro" className="tracking-widest font-handjet font-bold absolute top-14 text-4xl text-center leading-[3.5rem]">
        <span id="cursor" style={cursorStyle} className="before:w-3 before:h-6 before:bg-stone-600 before:inline-block animate-cursorAnimation"></span>
        {introVisible && (
          <span>
            Hello.<br />My name is Franziska Kissling.<br />I love to code.
          </span>
        )}
      </p>
    </div>
  );
}







