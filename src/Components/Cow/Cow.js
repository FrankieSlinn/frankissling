import React, { useState, useEffect } from 'react';
import cow from '../../images/Cow.png';
import chicken from '../../images/Chicken.png';
import whale from '../../images/Whale.png';
import trex from '../../images/TRex.png'; 


export default function Cow(){
    const [showCow, setShowCow] = useState(false);
    const [showChicken, setShowChicken] = useState(false);
    const [showWhale, setShowWhale] = useState(false);
    const [showTrex, setShowTrex] = useState(false);
    
  useEffect(() => {
    // Show the cow after typed text
    setTimeout(() => {
      setShowCow(true);
    }, 11000); 
    setTimeout(() => {
      setShowChicken(true);
    }, 14000); 
    setTimeout(() => {
      setShowWhale(true);
    }, 17000); 
    setTimeout(() => {
      setShowTrex(true);
    }, 20000); 
  }, []);
 
    
    return(
        <div className="flex justify-evenly items-center w-full  pointer-events-none">
      {/* Only show cow if the useState is showCow - dependent on the timer */}
      <div>{ showCow && <div
      // Get cow to move down the screen
  className={'animate-slideDown absolute bottom-0 text-center font-bold text-lg tracking-widest'}
      >
        <img className="h-20 w-20" src={cow} alt="Cow" />
        <span>About Me</span>
      </div> }
      </div>
      <div>
      { showChicken && <div
      // Get cow to move down the screen
  className={'animate-slideDown absolute bottom-0 text-center font-bold text-lg tracking-widest'}
      >
        <img className="h-20 w-20" src={chicken} alt="Chicken" />
        <span>Apps</span>
      </div> }
      </div>
      <div>
      { showWhale && <div
      // Get cow to move down the screen
  className={'animate-slideDown absolute bottom-0 text-center font-bold text-lg tracking-widest'}
      >
        <img className="h-20 w-20" src={whale} alt="Whale" />
        <span>Skills</span>
      </div> }
      </div>
      <div>
      { showTrex && <div
      // Get cow to move down the screen
  className={'animate-slideDown absolute bottom-0 text-center font-bold text-lg tracking-widest'}
      >
        <img className="h-20 w-20" src={trex} alt="TT-Rex" />
        <span>Education</span>
      </div> }
      </div>
      </div>   
    )
}