import React from 'react'
import banner from "../../public/Booksim.avif"

function Banner() {
  return(
    <>
      <div className='max-w-screen-2xl mx-auto md:px-20 flex flex-col md:flex-row max-[640px]:text-center'>
        <div className='w-full order-2 md:order-1 md:w1/2 md:mt-24'>
          <div className='space-y-11 mt-20'>
          <h1 className='text-4xl font-bold text-black leading-18 max-[640px]:text-center'>Hello Welcome to My Bookstore <span className='text-red-600'>You can learn Something Everyday</span></h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Quis sequi quae itaque praesentium suscipit obcaecati, perspiciatis ipsum repellat consequuntur 
          explicabo incidunt animi blanditiis dignissimos adipisci, dolorum maiores qui velit. Corporis?</p>

          <label class="input bg-white input-bordered flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 16 16" 
           fill="black" class="w-4 h-4 opacity-70">
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
           <input type="text" className=" text-black grow" placeholder="Email" />
          </label>

          </div>
          <button class="btn mt-6 btn-primary">Submit</button>
        </div>
        <div className='w-full order-1 mt-20 md:ml-8 md:w1/4'>
          <img src={banner} className='w-96 h-96 mt-24 ml-24 max-[640px]:ml-16 max-[640px]:h-80 max-[640px]:w-72' alt=""></img>
        </div>
      </div>
    </>
  )
  
}

export default Banner
