import React from 'react'

const island = require('../../images/island.jpg');


export default function Homepage() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${island})` }}>
      {/* <p>Hello. My name is Franziska Kissling and I love to code.</p> */}
    </div>
  )
}







