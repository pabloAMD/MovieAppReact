import React, { useContext, useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { NavBar } from '../components/NavBar';
import { MoviesGrid } from '../components/MoviesGrid';

import { NavBarPrivate } from '../../private/components/NavBarPrivate';
import { getTotalMovies, searchMovieBYTitle } from '../../../store/slice/movies/thunks';
import { setMovies } from '../../../store/slice/moviesSlice';
import { Footer } from '../components/Footer';
import { closeDropdown, openDropdown } from '../../../store/slice/componentsSlice';
import { AuthContext } from '../../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Categories } from '../components/Categories';


export const Home = () => {

    const { user } = useContext(AuthContext);




    const [condition, setcondition] = useState("Movies");
    const [valueSearched, setValueSearched] = useState("");

    const [stateSeach, setStateSeach] = useState(false);

    const dispatch = useDispatch();

    const { movies, page, finMovies, count } = useSelector(state => state.moviesT);//

    const { dropDown } = useSelector(state => state.componentState);//

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();





    useEffect(() => {

        dispatch(getTotalMovies(1));
    }, [])


    const getCategoriesNames = () => {

        const totalCategories = movies.map((movie) => {
            return movie.Genre.split(",");
        });

        const uniqueCategories = [...new Set(totalCategories.flat())];
        setCategories(uniqueCategories);


    }

    const searchMovie = (event) => {
        setStateSeach(true);
        setValueSearched(event);

        setcondition(`Results of search "${event}"`);
        dispatch(searchMovieBYTitle(event));
    }

    const handleSelect = (event) => {



        const valueT = event.target.text.toUpperCase();
        const arrayOrder = [...movies];

        setcondition(`Order by "${valueT}"`);

        if (valueT === "TITLE") {
            const order = arrayOrder.sort((a, b) => {
                if (a.Title < b.Title) { return -1; }
                if (a.Title > b.Title) { return 1; }
            });
            dispatch(setMovies({ movies: order, page: page, count, finMovies: finMovies }));

        }

        if (valueT === "GENRES") {
            getCategoriesNames();
            setcondition("GENRES");
        }

        dispatch(closeDropdown());




    }



    const onNextHandle = () => {

        if (stateSeach) {
            dispatch(searchMovieBYTitle(valueSearched, page + 1, finMovies + 6));
        } else {
            dispatch(getTotalMovies(page + 1, finMovies + 6));
        }



    }

    const onPreviosHandle = () => {

        if (stateSeach) {
            dispatch(searchMovieBYTitle(valueSearched, page - 1, finMovies - 6));
        } else {
            dispatch(getTotalMovies(page - 1, finMovies - 6));
        }

    }


    return (
        <>
            {
                user ? <NavBarPrivate onsearchMovie={event => searchMovie(event)} /> : <NavBar onsearchMovie={event => searchMovie(event)} />
            }


            <div className='flex flex-wrap  mx-16 items-center'>
                <h2>{condition}</h2>

                <div className='ml-auto'>
                    <button onClick={() => { dispatch(openDropdown()) }} className=" text-white bg-violet-900 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <div style={{ display: dropDown ? 'block' : 'none' }} className="fixed z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li onClick={handleSelect} data-id="1">
                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Title</a>
                            </li>
                            <li onClick={handleSelect}  >
                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Genres</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            {condition === "GENRES"
                ? <Categories categories={categories}/>
                :
                <>
                    <MoviesGrid movie={movies} categories={categories} />

                    {(count > 6) &&
                        <div className='flex justify-center py-7'>

                            <button disabled={finMovies === 6} onClick={onPreviosHandle} className=" disabledB inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                Previous
                            </button>

                            <button disabled={finMovies >= count} onClick={onNextHandle} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                                <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> </button>

                        </div>}]
                </>}





            <Footer />


        </>
    )
}
