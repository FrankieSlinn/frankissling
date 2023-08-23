import React, { useState, useEffect } from 'react';
import cow from '../../images/Cow.png';


export default function Cow(){
    const [showCow, setShowCow] = useState(false);
    
  useEffect(() => {
    // Show the cow after a delay
    setTimeout(() => {
      setShowCow(true);
    }, 11000); // Adjust the delay as needed
  }, []);
 
    
    return(
        <div className="flex justify-center items-center w-full  pointer-events-none">
      { showCow && <div
  className={'animate-slideDown absolute bottom-0 text-center font-bold text-lg tracking-widest'}
      >
        <img className="h-20 w-20" src={cow} alt="Cow" />
        <span>About Me</span>
      </div> }
      </div>
    
    
    
    )
}