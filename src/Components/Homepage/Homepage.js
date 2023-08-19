import React from 'react';
import { useState, useEffect } from 'react';

const island = require('../../images/island.jpg');



export default function Homepage() {

  const [cursorVisible, setCursorVisible] = useState(true);
  const [introVisible, setIntroVisible] = useState(false);
  const introText = "Hello.\nMy name is Franziska Kissling.\nI love to code.";
  const [typedText, setTypedText] = useState('');

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
      startTyping();
    }, 3500);

    return () => {
      clearInterval(cursorAnimationInterval);
      clearTimeout(showIntroTimer);
    };
  }, []);

  const startTyping = () => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= introText.length) {
        setTypedText(introText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // Adjust typing speed here
  };

  // Cursor display style
  const cursorStyle = {
    display: cursorVisible ? 'inline-block' : 'none'
  };

  // Intro display style
  const introStyle = {
    display: introVisible ? 'block' : 'none'
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      <p id="intro" className="tracking-widest font-handjet font-bold absolute top-14 text-4xl text-center leading-[3.5rem]">
        <span id="cursor" style={cursorStyle} className="before:w-3 before:h-6 before:bg-stone-600 before:inline-block animate-cursorAnimation"></span>
        <span style={introStyle} className="intro-text">
          {typedText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      </p>
    </div>
  );
}







