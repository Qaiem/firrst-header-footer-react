import React from 'react';
import './MyHeader.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HOME from '../Routing/HOME';
import ABOUT from '../Routing/ABOUT';
import CONTACT from '../Routing/CONTACT';
import DETAILS from '../Routing/DETAILS'

const MyHeader = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='navbar'>
      <h1>GeekVisor</h1>
      <div className='navbar-links'>
      <Link to={'HOME'} className='Linker'>HOME</Link>
      <Link to={'ABOUT'} className='Linker'>ABOUT</Link>
      <Link to={'CONTACT'} className='Linker'>CONTACT</Link>
      <Link to={'DETAILS'} className='Linker'>DETAILS</Link>
      </div>
      </div>
      <Routes>
        <Route path='HOME' element={<HOME />} />
        <Route path='ABOUT' element={<ABOUT />} />
        <Route path='CONTACT' element={<CONTACT />} />
        <Route path='DETAILS' element={<DETAILS />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyHeader