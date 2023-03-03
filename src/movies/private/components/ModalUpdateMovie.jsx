import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeToUpdateModal, closeToNewUrlModal, openToNewUrlModal } from '../../../store/slice/componentsSlice';
import { updateMovieById } from '../../hooks/useFetchApi';

export const ModalUpdateMovie = ({ movieById }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { modalToNewUrl } = useSelector(state => state.componentState);


    const [valesMovies, setValesMovies] = useState({
        Title: movieById.Title,
        Director: movieById.Director,
        Genre: movieById.Genre,
        Actors: movieById.Actors,
        Plot: movieById.Plot,
        Country: movieById.Country,
        Language: movieById.Language,
        Runtime: movieById.Runtime,
        Poster: movieById.Poster,
        Year: movieById.Year
    })

    const onFieldChange = (e) => {

        setValesMovies({
            ...valesMovies,
            [e.target.name]: e.target.value,

        });
    }

    const onUpdateMovie = () => {
        updateMovieById(movieById.id, valesMovies).then((data) => {

            dispatch(closeToUpdateModal());
            navigate("/movie-detail/actions/"+movieById.id);
            window.location.reload();
            
        });

    }

    
    



    return (
        <>

            <div tabIndex="-1" className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full h-full max-w-4xl md:h-auto">

                    <div className="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Update Movie
                            </h3>

                        </div>

                        <div className="relative w-full h-full  md:h-auto">
                            <form className="space-y-6" action="#">

                                <div className='flex justify-around'>
                                    <div className='flex mx-12  mt-4'>
                                    
                                        <img className='h-56' src={valesMovies.Poster} alt="Poster" srcSet="" />
                                        <div className="z-40 pt-16 pl-3">
                                            <button onClick={() => { dispatch(openToNewUrlModal()) }} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                                <span className="sr-only">Icon description</span>
                                            </button>
                                        </div>
                                    </div>


                                    <div className='mx-3  mt-4'>



                                        <div className='flex items-center flex-wrap'>
                                            <label htmlFor="email" className=" w-52 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
                                            <input value={valesMovies.Title} onChange={onFieldChange} type="text" name="Title" id="Title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>

                                        <div className='flex mt-4 items-center flex-wrap' >
                                            <label htmlFor="password" className="  w-52 text-sm font-medium text-gray-900 dark:text-white">Director:</label>
                                            <input value={valesMovies.Director} onChange={onFieldChange} type="text" name="Director" id="Director" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>

                                        <div className='flex mt-4 items-center flex-wrap'>
                                            <label htmlFor="email" className=" w-52 text-sm font-medium text-gray-900 dark:text-white">Genre:</label>
                                            <input value={valesMovies.Genre} onChange={onFieldChange} type="text" name="Genre" id="Genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>
                                    </div>




                                </div>
                                <div className='flex items-center mx-3  mt-4 justify-between'>

                                </div>
                                <div>

                                    <div>

                                    </div>

                                    <div className='flex items-center mx-3  mt-4 justify-between'>


                                        <div className='flex items-center flex-wrap' >
                                            <label htmlFor="password" className="  w-52 text-sm font-medium text-gray-900 dark:text-white">Country:</label>
                                            <input value={valesMovies.Country} onChange={onFieldChange} type="text" name="Country" id="Country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>
                                        <div className='flex items-center flex-wrap'>
                                            <label htmlFor="email" className=" w-52 text-sm font-medium text-gray-900 dark:text-white">Actors:</label>
                                            <input value={valesMovies.Actors} onChange={onFieldChange} type="text" name="Actors" id="Actors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>
                                    </div>

                                    <div className='flex items-center mx-3  mt-4 justify-between'>

                                        <div className='flex items-center flex-wrap' >
                                            <label htmlFor="password" className="  w-52 text-sm font-medium text-gray-900 dark:text-white">Languages:</label>
                                            <input value={valesMovies.Language} onChange={onFieldChange} type="text" name="Language" id="Language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>
                                        <div className='flex items-center flex-wrap' >
                                            <label htmlFor="password" className="  w-52 text-sm font-medium text-gray-900 dark:text-white">Runtime:</label>
                                            <input value={valesMovies.Runtime} onChange={onFieldChange} type="text" name="Runtime" id="Runtime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        </div>
                                    </div>

                                    <div className='mx-3  mt-4' >
                                        <label htmlFor="password" className="w-52 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                                        <textarea value={valesMovies.Plot} onChange={onFieldChange} name="Plot" id="Plot" rows="4" className="block p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                    </div>
                                </div>





                            </form>
                        </div>

                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={onUpdateMovie} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button onClick={() => { dispatch(closeToUpdateModal()) }} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>

                        {modalToNewUrl ? (

                            <>
                                <div tabIndex="-1" className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-full h-full max-w-md md:h-auto">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                    Ingrese una nueva Url
                                                </h3>

                                            </div>

                                            <div className="p-6 space-y-6">
                                                <input onChange={onFieldChange} type="text" name="Poster" id="Poster" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder='write new url ...' required />
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button onClick={() => { dispatch(closeToNewUrlModal()) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                                <button onClick={() => { dispatch(closeToNewUrlModal()), setValesMovies({...valesMovies,Poster:movieById.Poster}) }} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}

                    </div>
                </div>
            </div>






        </>
    )
}
