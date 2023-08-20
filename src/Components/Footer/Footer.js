import React from 'react';
import cow from '../../images/Cow.png';

export default function Footer() {
  return (
    <div className="text-center flex justify-evenly items-center -mt-32 tracking-widest font-bold text-stone-900">
    <div className="bg-opacity-0">
      <img className="h-20 w-20" src={cow} alt="About Me" />
      <span >About Me</span>
    </div>
    </div>
  );
}