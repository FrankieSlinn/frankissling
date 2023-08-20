import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';

const island = require('../../images/island.jpg');


export default function Homepage() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setTypingComplete(true);
    setTimeout(() => {
      setCursorVisible(false);

    }, 9000);
  };

  return (
    <div>
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      <p id="intro" className="tracking-widest font-handjet font-bold absolute top-36 text-4xl text-left leading-[3.5rem]">
        <Typewriter
          words={["Hello. I'm Franziska. I love to code."]}
          cursor
          cursorStyle={cursorVisible ? '|' : ' '}
          typeSpeed={150}
          onLoopDone={handleTypingComplete}
        />
      </p>
    </div>
    <Footer />
    </div>
  );
}
