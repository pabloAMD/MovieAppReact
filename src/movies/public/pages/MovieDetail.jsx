import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { useParams } from 'react-router-dom'

import { Loading } from '../components/Loading';
import { Rating } from '../components/Rating';
import { SimilarMovies } from '../components/SimilarMovies';

import { searchMovieApi } from '../controller/searchMovie';
import { getById } from '../controller/getById';

export const MovieDetail = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [movieById, setMovieById] = useState(0);

    const [similarMovies, setsimilarMovies] = useState([]);

    useEffect(() => {

        getById(id).then((data) => {
            setMovieById(data);
        });

        searchMovieApi(movieById.Title).then((data) => {
            const moviesS = data.slice(0, 3);
            setsimilarMovies(moviesS);
            setIsLoading(false);
        });





    }, [isLoading])



    return (
        <>
            <NavBar />

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

            <div className='py-5 mx-16'>
                <h1>Similares</h1>

                <SimilarMovies movies={similarMovies} />
            </div>
        </>
    )
}
