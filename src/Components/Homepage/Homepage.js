import React from 'react'

const island = require('../../images/island.jpg');


export default function Homepage() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
<p className="tracking-widest font-handjet font-bold absolute top-16  text-4xl text-center leading-[3.5rem]" >
  Hello.<br />My name is Franziska Kissling.<br /> I love to code.
</p>
</div>

   
  )
}







