import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createNewMovieApi } from '../../hooks/useFetchApi';
import { Footer } from '../../public/components/Footer';
import { NavBar } from '../../public/components/NavBar'
import { NavBarPrivate } from '../components/NavBarPrivate'

export const CreateMovie = () => {

    const user = localStorage.getItem("user");
    const navigate = useNavigate();
    

    const [ratingsAdd, setRatingsAdd] = useState({
        Source: "",
        Value: ""
    });

    const [ratingToSend, setRatingToSend] = useState([]);

    
    const [valesMovies, setValesMovies] = useState({
        Title: "",
        Director: "",
        Genre: "",
        Actors: "",
        Plot: "",
        Country: "",
        Language: "",
        Runtime: "",
        Poster: "",
        Year: "",
    })

    const onFieldChange = (e) => {

        setValesMovies({
            ...valesMovies,
            [e.target.name]: e.target.value,

        });
    }

    const onFieldChangeRating = (e) => {

        setRatingsAdd({
            ...ratingsAdd,
            [e.target.name]: e.target.value,

        });
    }


    const onAddRating = (s,v) => {

       setRatingToSend([{Source:s, Value: v},...ratingToSend]);

       setRatingsAdd({  Source: "", Value: "" });
        
    }

     const onDeleteRatings = () => {

       setRatingToSend([]);
        
    }

    const onSendForm = (e) => {
        e.preventDefault();

       
        createNewMovieApi(valesMovies, ratingToSend).then( navigate("/"));
    }

  

    return (
        <>
            {
                user ? <NavBarPrivate onsearchMovie={event => searchMovie(event)} /> : <NavBar onsearchMovie={event => searchMovie(event)} />
            }



            <div className='p-12  my-7 block max-w-7xl mx-auto mt-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                <h2 className='text-center pb-3'>Create Movie</h2>
                <form onSubmit={onSendForm}>

                    <div className=" flex flex-wrap justify-between">

                        <div className="mb-6 max-w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input value={valesMovies.Title} onChange={onFieldChange} type="text" name="Title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>




                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Director</label>
                            <input value={valesMovies.Director} onChange={onFieldChange} type="text" name="Director" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                            <input value={valesMovies.Year} onChange={onFieldChange} type="text" name="Year" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Runtime</label>
                            <input value={valesMovies.Runtime} onChange={onFieldChange} type="text" name="Runtime" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>



                    </div>

                    <div className=" flex flex-wrap justify-between ">
                        <div className="mb-6 w-1/2 pr-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <input value={valesMovies.Country} onChange={onFieldChange} type="text" name="Country" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-6 w-1/2 pl-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                            <input value={valesMovies.Language} onChange={onFieldChange} type="text" name="Language" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>

                    <div className=" flex flex-wrap justify-between ">
                        <div className="mb-6 w-1/2 pr-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actors</label>
                            <input value={valesMovies.Actors} onChange={onFieldChange} type="text" name="Actors" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-6 w-1/2 pl-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                            <input value={valesMovies.Genre} onChange={onFieldChange}  type="text" name="Genre" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poster URL</label>
                        <input value={valesMovies.Poster} onChange={onFieldChange} type="text" name="Poster" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>

                    <div className=" flex flex-wrap justify-between ">
                        <div className="mb-6 w-1/3 pr-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source</label>
                            <input value={ratingsAdd.Source} onChange={onFieldChangeRating}   type="text" name="Source" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-6 w-1/3 pl-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Values</label>
                            <input value={ratingsAdd.Value} onChange={onFieldChangeRating} type="text" name="Value" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-6 w-1/3 pl-2 items-end flex justify-center">

                        <a onClick={event => onAddRating(ratingsAdd.Source, ratingsAdd.Value)}  className=" text-white mr-5 hover:bg-blue-500 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Rating</a>
                        <a onClick={event => onDeleteRatings()}  className=" text-white hover:bg-red-500 bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete Ratings</a>
                            

                        </div>

                    </div>
                    <div className='mb-6 w-full pl-2'>
                    <h3 className='text-lg text-blue-900'>Ratings</h3>
                    {ratingToSend.length > 0 && ratingToSend.map((rating, index) => (
                       
                        <h2 key={index} className='text-base font-medium text-gray-900 dark:text-white'>Source: {rating.Source} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Value: {rating.Value}</h2>
                    ))}
                    </div>

                    <div className="mb-6 w-full pl-2">
                        <label className="w-52 text-sm font-medium text-gray-900 dark:text-white">Plot:</label>
                        <textarea value={valesMovies.Plot} onChange={onFieldChange} name="Plot" id="Plot" rows="4" className="block p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>

                    




                    <div className='text-center'>
                        <button type='submit'  className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </div>




                </form>
            </div>
            <Footer />
        </>
    )


}
