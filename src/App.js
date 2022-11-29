import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Settings from './components/Settings';
import Fetechuserdata from './components/Fetechuserdata';
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ()=>{
    return(
      
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/home" element={<Home/>} />
            <Route path="/course" element={<Courses/>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Fetechuserdata" element={<Fetechuserdata/>} />
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
      
      
    )
  } 
  export default App