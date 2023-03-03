import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import movieIcon from '../../../assets/movie-svgrepo-com.svg'
import { AuthContext } from '../../auth/context/AuthContext';


export const NavBarPrivate = ({ onsearchMovie }) => {

    const {user, logout} = useContext(AuthContext);

    const [searchValue, setsearchValue] = useState("");
    const navigate = useNavigate();

    const onInputChange = ({ target }) => {

        setsearchValue(target.value);

    }

    const onSubmit = (event) => {

        event.preventDefault();

        onsearchMovie(searchValue.trim());
        setsearchValue("");
    }

    const logoutUser = () => {

        logout();
        navigate("/");
        

    }

    const onOpenNavBar = () => {
        console.log("entra")
            
            const navbar = document.getElementById("navbar-sticky");
            navbar.classList.toggle("hidden");    
           
    }

    return (
        <div className='pb-28 mb-10'>
            <nav className="pt-3.5 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <img src={movieIcon} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-blue-900  text-3xl font-semibold whitespace-nowrap dark:text-white">Movie App</span>
                    </a>
                    <div className="flex md:order-2">


                        <button  onClick={onOpenNavBar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className='pr-8'>
                                <form onSubmit={onSubmit} className="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <label htmlor="default-search" className=" text-sm  text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input value={searchValue} onChange={onInputChange} type="search" id="default-search" className="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search movie" required />

                                    </div>
                                </form>
                            </li>

                            <li>
                                <a href="/" className="block text-2xl py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block text-2xl py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="/create-movie" className="block text-2xl py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Movie</a>
                            </li>
                            <li className=' justify-center text-center' >

                                <p className='flex text-2xl  text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                    {user}</p>
                            </li>

                            <li>
                                <a onClick={logoutUser} className="block py-2 pl-3 pr-4 text-2xl  text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
