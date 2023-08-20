import React, { useState, useEffect } from 'react';
import cow from '../../images/Cow.png';

export default function Footer() {
  const [showCow, setShowCow] = useState(false);

  useEffect(() => {
    // Show the cow after a delay
    setTimeout(() => {
      setShowCow(true);
    }, 7000); // Adjust the delay as needed
  }, []);

  return (
    <div className="fixed left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen pointer-events-none">
      <div
        className={`transition-transform duration-15000 ${
          showCow ? 'absolute bottom-0 translate-y-0' : 'absolute top-0 -translate-y-full'
        }`}
      >
        <img className="h-20 w-20" src={cow} alt="Cow" />
        <span>About Me</span>
      </div>
    </div>
  );
}













