import React, { useEffect } from 'react'
import { useState } from 'react';
import Login from './Login';

function Navbar() {
    //javascript code here 
    //state for theme
    const [color,setColor]=useState('white');
    //store nav item 
    const navItem=(<>
        <li><a className='text-black  text-base  hover:text-amber-600 ' href="/">Home</a></li>
        <li><a className='text-black  text-base  hover:text-amber-600' href="/books">Books</a></li>
        <li><a className='text-black  text-base  hover:text-amber-600' href="/contact">Contact</a></li>
        <li><a className='text-black  text-base  hover:text-amber-600' href="/about">About</a></li>
    
    </>)


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-3 bg-white fixed z-50">
        <div className="navbar bg-base-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                    {navItem}
                    </ul>
                </div>
                <a className="text-2xl font-bold md:ml-0 cursor-pointer text-rose-600">@Bookstore</a>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItem}
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <label className="input input-bordered flex items-center gap-2 bg-white rounded-md border-slate-950">
                        <input type="text" className="text-black" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="current-color" className="w-8 h-7 opacity-70">
            
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <input type="checkbox" value="synthwave" className="toggle m-4 theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
                <div className="">
                    <a className=" bg-red-600 btn text-white px-3 py-2 rounded-md m-3 w-20 max-[640px]:h-12 max-[640px]:w-16"
                    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
                    <Login/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
