import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";


export const MovieItem = ({ movie }) => {

    const {user} = useContext(AuthContext);


  return (  
<div className="mt-11 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mx-8 mb-5 max-w-sm bg-blue-900/10  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a className="flex justify-center">
        <img className="py-5 max-w-xs"src={movie.Poster} alt="" />
    </a>
    <div className="p-5">
        <a >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.Plot}</p>

        {user ?<a href={`/movie-detail/actions/${movie.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-900 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a> :<a href={`/movie-detail/${movie.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-900 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a> }

       
        
    </div>
</div>

    
  )
}
