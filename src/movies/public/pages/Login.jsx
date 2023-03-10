import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Toas } from '../components/Toas';
import {  verifyUser } from '../../hooks/useFetchApi';
import { AuthContext } from '../../auth/context/AuthContext';

export const Login = () => {

    const {login} = useContext(AuthContext);


    const [error, seterror] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {

   
        verifyUser(e.target.email.value, e.target.password.value).then((data) => {
            
            if (data.status === "ok") {
                login(data.name);
                
                navigate("/");
            }

        }).then(() => {

            seterror("Revise sus datos");
            

        });

    }



    return (

        <>


            <div className='p-20 block max-w-2xl mx-auto mt-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' >
                <h1 className='text-center'>Login</h1>

                {error && <Toas messaje={error} />}
                <form onSubmit={handleSubmit} >


                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className='text-center'>
                        <button type="submit" className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </div>




                </form>

                <div className='text-center'>
                    <p className='py-5'>Don't have account?</p>
                    <a href='/register' className="no-underline hover:underline  text-red-500">Register Now</a>
                </div>

                
            </div>
        </>





    )
}
