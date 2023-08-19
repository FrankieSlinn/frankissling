import React from 'react';
import { useState, useEffect } from 'react';

const island = require('../../images/island.jpg');



export default function Homepage() {

  const [cursor1Visible, setCursor1Visible] = useState(true);
  const [cursor2Visible, setCursor2Visible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const introText = "Hello. My name is Franziska Kissling and I love to code.";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Animation for the first cursor effect
    const cursor1AnimationInterval = setInterval(() => {
      setCursor1Visible(prevVisible => !prevVisible);
    }, 500);

    // Show the intro after 4 seconds
    const showIntroTimer = setTimeout(() => {
      setCursor1Visible(false);
      setCursor2Visible(true);
      setIntroVisible(true);
      clearInterval(cursor1AnimationInterval); // Clear the first cursor animation interval
      startTyping();
    }, 4000);

    return () => {
      clearInterval(cursor1AnimationInterval);
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
        // Start the continuously flashing cursor at the end
        startFlashingCursor();
      }
    }, 70); // Adjust typing speed here
  };

  const startFlashingCursor = () => {
    setInterval(() => {
      setCursor2Visible(prevVisible => !prevVisible);
    }, 500);
  };

  // Cursor display style
  const cursor1Style = {
    display: cursor1Visible ? 'inline-block' : 'none'
  };
  const cursor2Style = {
    display: cursor2Visible ? 'inline-block' : 'none'
  };

  // Intro display style
  const introStyle = {
    display: introVisible ? 'inline-block' : 'none'
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      <p id="intro" className="tracking-widest font-handjet font-bold absolute top-14 text-4xl text-center leading-[3.5rem]">
        <span id="cursor" style={cursor1Style} className="before:w-3 before:h-6 before:bg-stone-600 before:inline-block animate-cursorAnimation"></span>
        <span style={introStyle} className="intro-text">
          {typedText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
            </React.Fragment>
          ))}
        </span>
        <span id="cursor2" style={cursor2Style} className="before:w-3 before:h-6 before:bg-stone-600 before:inline-block animate-cursorAnimation"></span>
      </p>
    </div>
  );
}







