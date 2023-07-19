import React from "react";
//import {useNavigate, Route} from 'react-router-dom';


const Login = () => {
    // const navigate = useNavigate();

    return (
        <div className="bg-purple-50 px-10 py-8 rounded-lg border-2 border-gray-200">
            <div className="mt-4">
                <label className="text-lg font-medium">Email</label>
                <input 
                    className='w-full border-2 border-gray-200 mt-1 p-3 rounded-lg bg-transparent'
                    placeholder="Enter your email"
                />
            </div>
            <div className="mt-4">
                <label className="text-lg font-medium">Password</label>
                <input 
                    className='w-full border-2 border-gray-200 mt-1 p-3 rounded-lg bg-transparent'
                    placeholder="Enter your password"
                />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <input type="checkbox" id="remember"/>
                    <label className="ml-2 font-medium" for="remember">Remember me</label>
                </div>
                <div>
                    <button className="font-medium text-base text-violet-500 hover:underline active:font-bold active:duration-75">Forgot password</button>
                </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button className="active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-lg bg-violet-500 text-white text-lg font-semibold">Sign in</button>
                <button className="flex border-2 border-gray-200 items-center justify-center active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-lg">
                    <svg viewBox="0 0 48 48" className="h-5 mr-2">
                        <clipPath id="g">
                            <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                        </clipPath>
                        <g class="colors" clip-path="url(#g)">
                            <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                            <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                            <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                            <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                        </g>
                    </svg>
                    Sign in with Google
                </button>
            </div>
            <div className="mt-8 flex items-center justify-center">
                <p className="font-medium text-base">Are you new here?</p>
                <button className="font-medium text-violet-500 text-base ml-2 hover:underline active:font-bold active:duration-75">Sign up</button>
            </div>
        </div>
    )
}

export default Login