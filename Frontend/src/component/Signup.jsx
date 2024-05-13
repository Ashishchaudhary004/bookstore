import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form";
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className="flex h-screen items-center justify-center ">
            <div className=" w-[600px] rounded-lg p-8 text-black max-[640px]:size-full ">
                <div className='modal-box bg-white'>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                    <h3 className="font-bold text-xl text-center text-red-800">Sign UP</h3>
                    {/* name */}
                    <div>
                        <span className='font-bold mt-3'>Name: </span><br/>
                        <input type='text' placeholder='Enter your Name' className='w-96 h-8 px-3 mt-2 border rounded-lg bg-white text-black outline-none max-[640px]:w-72'{...register("name", { required: true })}></input><br/>
                        {errors.name && <span className='text-sm text-red-500'>name is required</span>}
                    </div>
                    {/* phone */}
                    <div className='mt-3'>
                        <span className='font-bold mt-3'>Mobile NO: </span><br/>
                        <input type='text' placeholder='Enter your mobile number' className='w-96 h-8 px-3 mt-2 border rounded-lg bg-white text-black outline-none max-[640px]:w-72'{...register("mobileno", { required: true })}></input><br/>
                        {errors.mobileno && <span className='text-sm text-red-500'>phone No. is required</span>}
                    </div>
                    {/* email */}
                    <div className='mt-3'>
                        <span className='font-bold mt-3'>Email: </span><br/>
                        <input type='email' placeholder='Enter Email id' className='w-96 h-8 px-3 mt-2 border rounded-lg bg-white text-black outline-none max-[640px]:w-72'{...register("email", { required: true })}></input><br/>
                        {errors.email && <span className='text-sm text-red-500'>email is required</span>}
                    </div>
                    {/* password */}
                    <div className='mt-3'>
                        <span className='font-bold mt-2'>Password: </span><br/>
                        <input type='password' placeholder='password' className='w-96 h-8 px-3 mt-2 border rounded-lg bg-white text-black outline-none max-[640px]:w-72'{...register("password", { required: true })}></input><br/>
                        {errors.password && <span className='text-sm text-red-500'>password is required</span>}
                    </div>
                    {/* button */}
                    <div className='flex justify-around mt-3'>
                        <button className='btn btn-sm btn-primary text-white px-4 max-[640px]:px-2 py-1 mt-6 hover:bg-black'>Submit</button>
                        <p className='mt-8'>Please SignIn?{" "} 
                        <button className='underline text-red-700 cursor-pointer'
                        onClick={()=>
                            document.getElementById("my_modal_3").showModal()
                        }
                        >SignIn</button>{" "}
                        <Login/>
                        </p>   
                    </div>
                    </form>
                </div>
            </div> 
        </div>
    </>
  )
}

export default Signup
