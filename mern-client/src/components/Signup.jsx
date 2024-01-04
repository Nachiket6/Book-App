import React, { useContext, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';

const Signup = () => {
    const {createUser, loginWithGoogle} = useContext(AuthContext);
    const [error, setError]=useState("Error");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleSignUp =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signed up successfully!!🚀")
            navigate(from , {replace: true});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
    const handleRegister = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert("Sign up successful")
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            Sign up
        </h1>
        <form onSubmit={handleSignUp} className="mt-6">
            <div className="mb-2">
                <input
                    type="email"
                    name='email'
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your Email'
                />
            </div>
            <div className="mb-2">
                <input
                    type="password"
                    name='password'
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your Password'
                />
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Sign up
                </button>
            </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
            <button
            onClick={handleRegister}
                type="button"
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <span className='pl-3'>Signup with Google</span>
            </button>
            
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <a
                href="/login"
                className="font-medium text-purple-600 hover:underline"
            >
                Login
            </a>
        </p>
    </div>
</div>
  )
}

export default Signup