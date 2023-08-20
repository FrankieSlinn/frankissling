import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import './App.css';

function App() {
  return (<div>
    

          <Routes>
            {/*** HOME ***/}
            <Route path='/' element={<Homepage />}></Route>
            </Routes>
    </div>
  
  );
}

export default App;
