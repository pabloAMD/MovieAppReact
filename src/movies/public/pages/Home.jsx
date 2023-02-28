import React, { useState } from 'react'
import { NavBar } from '../components/NavBar';
import { MoviesGrid } from '../components/MoviesGrid';


import { useFetchApi, useSearchApi } from '../hooks/useFetchApi';
import { NavBarPrivate } from '../../private/components/NavBarPrivate';


export const Home = () => {

    const [condition, setcondition] = useState("Movies");

    const { movies, setMovies } = useFetchApi();

    const [categories, setCategories] = useState([]);

    const user = localStorage.getItem("user");
    console.log(user);

   

    const getCategoriesNames = () => {

        const totalCategories = movies.map((movie) => {
            return movie.Genre.split(",");
        });

        const uniqueCategories = [...new Set(totalCategories.flat())];
        setCategories(uniqueCategories);


    }

    const searchMovie = (event) => {
        
        setcondition(`Results of search "${event}"`);
        useSearchApi(event).then((data) => {
            setMovies(data);

        });
    }

    const handleSelect = (event) => {


        const valueT = event.target.text.toUpperCase();



        setcondition(`Order by "${valueT}"`);

        if (valueT === "TITLE") {
            const order = movies.sort((a, b) => {
                if (a.Title < b.Title) { return -1; }
                if (a.Title > b.Title) { return 1; }
            });
            setMovies(order);
            
        }

        if (valueT === "GENERE") {
            getCategoriesNames();
        }
    }
    return (
        <>
            {
                user ? <NavBarPrivate onsearchMovie={event => searchMovie(event)} /> : <NavBar onsearchMovie={event => searchMovie(event)} /> 
            }
            

            <div className='flex  mx-16'>
                <h3>{condition}</h3>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li onClick={handleSelect} data-id="1">
                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Title</a>
                        </li>
                        <li  onClick={handleSelect}  >
                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Genere</a>
                        </li>

                    </ul>
                </div>
            </div>

           <MoviesGrid movie={movies}  categories ={categories}/>









        </>
    )
}
