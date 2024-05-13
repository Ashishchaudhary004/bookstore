import React from 'react';
import Home from './home/Home';
import {Route, Routes} from 'react-router-dom';
import Courses from './courses/Courses'
import Signup from './component/Signup';
import Contact from './Cont/Contact';
import About from './about/About';
const App=()=>{
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
     
    </Routes>
  </>
  )
   
}
export default App