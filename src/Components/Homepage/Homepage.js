import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';

const island = require('../../images/island.jpg');


export default function Homepage() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);

  setTimeout(() => {

    return setIntroVisible(true);

  }, 2000);

  const handleTypingComplete = () => {
    console.log("handle typing running")
    setTypingComplete(true);
    setTimeout(() => {
      console.log("cursor not visible")
      return setCursorVisible(false);

    }, 2000);
  };

  return (
    <div>
    <div className=" h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      <p id="intro" className=" tracking-widest font-handjet font-bold absolute top-36 text-4xl text-left leading-[3.5rem]" >
       
       { introVisible && <Typewriter
        style={{display: "none"}}      
          words={["Hello. I'm Franziska. I love to code."]}
            cursor 
          onLoopDone={handleTypingComplete}
          cursorStyle={cursorVisible ? '|' : ' '}
          typeSpeed={150}
  
          
        /> }
      </p>
    </div>
    <Footer />
    </div>
  );
}
