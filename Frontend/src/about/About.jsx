import React from 'react'
import Navbar from '../component/Navbar'

function About() {
  return (
    <>
    <Navbar/>
   <div className='bg-slate-600'>
   <div className="hero min-h-screen">
      <div className="hero-content text-center mt-20">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-black-200">About <span className='text-amber-300'>BookStore</span></h1>
          <p className="py-6 font-serif text-xl">Welcome to @BookStore, your premier destination for all things books! Founded with a passion for literature and a commitment to fostering a love of reading, we strive to provide book enthusiasts with an unparalleled shopping experience.
            At @BookStore, we believe that books have the power to inspire, educate, and entertain. Whether you're seeking the latest bestsellers, timeless classics, 
            or niche genres, our extensive collection caters to readers of all tastes and interests. From fiction to non-fiction, mystery to romance, fantasy to biography, our shelves are stocked with a diverse array of titles to satisfy every reader's craving.
          </p>
    
        </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default About
