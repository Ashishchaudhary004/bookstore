import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white text-black max-[640px]:mr-6">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                     onClick={()=>
                        document.getElementById("my_modal_3").showModal()
                    }
                    >✕</Link>
               
                    <h3 className="font-bold text-xl text-center text-red-800">Login</h3>
                    {/* email */}
                    <div>
                        <span className='font-bold mt-3'>Email: </span><br/>
                        <input type='email' placeholder='Enter Email id' className='w-80 h-8 px-3 mt-2 border rounded-lg bg-white text-black outline-none' {...register("email", { required: true })}></input><br/>
                        {errors.email && <span className='text-sm text-red-500'>email is required</span>}

                    </div>
                    {/* password */}
                    <div className='mt-6'>
                        <span className='font-bold mt-3'>Password: </span><br/>
                        <input type='password' placeholder='password' className='w-80 h-8 px-3 mt-2 border rounded-lg bg-white text-black outline-none'{...register("password", { required: true })}></input><br/>
                        {errors.password && <span className='text-sm text-red-500'>password is required</span>}

                    </div>
                    {/* button */}
                    <div className='flex justify-around mt-3'>
                        <button className='btn btn-sm btn-primary text-white px-4 py-1 mt-6 hover:bg-black'>Sign In</button>
                        <p className='mt-8'>Do you want registerd?{" "} <Link to="/signup" className='underline text-red-700 cursor-pointer'>SignUp</Link>{" "}</p>
                    </div>
                </form>
            </div>
        </dialog>   
    </div>
  )
}

export default Login
