import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal ">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Login</h3>

    {/* Email */}
    <div className = "mt-4 space-y-2">
      <span>Email</span>
      <br />
      <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" 
      {...register("email", { required: true })}/>
      <br />
       {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>

    {/* Password */}  
    <div className = "mt-4 space-y-2">
      <span>Password</span>
      <br />
      <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
      {...register("password", { required: true })} />
      <br />
       {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>

    {/* Button */}

    <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{' '} <Link to="/signup" className="underline text-blue-500 cursor-pointer"> Signup</Link>
              </p>
             
            </div>
            </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
