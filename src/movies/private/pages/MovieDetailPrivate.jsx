import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Loading } from '../../public/components/Loading';
import { Rating } from '../../public/components/Rating';
import { getById } from '../../public/controller/getById';
import { NavBarPrivate } from '../components/NavBarPrivate';

export const MovieDetailPrivate = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [movieById, setMovieById] = useState(0);



    useEffect(() => {

        getById(id).then((data) => {
            setMovieById(data);
            setIsLoading(false);
        });







    }, [isLoading])



    return (
        <>
            <NavBarPrivate />

            {
                isLoading && (<Loading />)
            }

            <div className='pt-6 pb-20 mx-16'>

                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex  space-x-1 md:space-x-3">
                        <li className="inline-flex ">
                            <a href="/" className="inline-flex  text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="inline-flex i ">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Movie detail</a>
                            </div>
                        </li>

                    </ol>
                </nav>
            </div>



            <div className='flex flex-wrap justify-center movieDetail '>



                <div className='mx-12 border-collapse '>
                    <img className='object-left' src={movieById.Poster} alt="" />
                </div>

                <div className='max-w-screen-md	 mx-20 '>

                    <h2>{`${movieById.Title} : ${movieById.Year}`}</h2>

                    <p className='text-justify pb-8'>{movieById.Plot}</p>

                    <div className='flex flex-wrap justify-between'>

                        <div>


                            <p className=''><b>Genere: </b>{movieById.Genre}</p>
                            <p className='pt-2'><b>Director: </b>{movieById.Director}</p>
                            <p className='pt-2'><b>Actors: </b>{movieById.Actors}</p>

                        </div>

                        <div>
                            <p className='pt-2'><b>Country: </b>{movieById.Country}</p>

                            <p className='pt-2'><b>Language : </b>{movieById.Language}</p>

                            <p className='pt-2'><b>Runtime : </b>{movieById.Runtime}</p>
                        </div>
                    </div>

                    <p className='pt-2'><b>Ratings : </b></p>

                    {!isLoading && (
                        <Rating rating={movieById.Ratings} />


                    )}

                    <p className='pt-7'><b>Awards : </b>{movieById.Awards}</p>
                </div>
            </div>

            <h1 className='mx-16'>Actions</h1>

            <div className='py-5 mx-16 flex justify-center'>
                <button type="button"  data-modal-target="large-modal" data-modal-toggle="large-modal" className=" block w-96 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-3.5 py-6 text-center mr-2 mb-2">Update</button>
                <button type="button" className="lock w-96 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-3.5 py-6 text-center mr-2 mb-2">Delete</button>


            </div>

            <div id="large-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-4xl md:h-auto">
                  
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                       
                        <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Update Movie
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                       
                        <div className="relative w-full h-full max-w-md md:h-auto">
                           <form className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    
                </form>
                        </div>
                       
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="large-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
