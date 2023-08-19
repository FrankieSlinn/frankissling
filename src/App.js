import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import './App.css';

function App() {
  return (<div>
    
    {/* <div className="w-64 h-64 bg-cover bg-center" style={{ backgroundImage: 'url("/images/island.jpg")'}}> */}
          <Routes>
            {/*** HOME ***/}
            <Route path='/' element={<Homepage />}></Route>
            </Routes>
    <h1 className="text-red-500">me</h1>
    {/* <a href="/images/Island.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/images/Island.jpg" alt="Island" />
      </a> */}
    </div>
  
  );
}

export default App;
