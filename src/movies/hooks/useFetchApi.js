import { useEffect, useState } from "react";
import { getById } from "../controller/getById";
import { getMovies } from "../controller/getMovies";
import { searchMovieApi } from "../controller/searchMovie";


export const useFetchApi = () => {


    const [movies, setMovies] = useState([]);

    const moviesGet = async () => {
        const movies = await getMovies();
        setMovies(movies);
    };

    useEffect(() => {
        moviesGet();
    }, []);

    return {
        movies,
        setMovies
    };
}

export const useSearchApi = async (movieTitle) => {

    const resu = await searchMovieApi(movieTitle);

    return resu;;
}

export const useGetByid = (id) => {

    const [movieById, setMovieById] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const moviesGetByid = async () => {
        const resp = await getById(id);
        setMovieById(resp);
        setisLoading(false);
    };

    useEffect(() => {
        moviesGetByid();
    }, []);


    return {
        movieById,
        isLoading,
        title: movieById.Title,
    };

}

export const useGetSilimarMovies= (movieD) => {
    
    

    const [similarMovie, setsimilarMovie] = useState([]);
    
    

    const similarMoviesGet = async () => {
        
        const resp = await searchMovieApi(movieD);
        const arr= new Set(resp)
        const result = [...arr];
        setsimilarMovie(result);
       
   
    };

    useEffect(() => {
        similarMoviesGet();
    }, []);


    return {
        similarMovie:similarMovie.slice(0, 5),
    };

}


