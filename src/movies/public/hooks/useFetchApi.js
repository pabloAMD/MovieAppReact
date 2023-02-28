import { useEffect, useState } from "react";
import { getById } from "../controller/getById";
import { getMovies } from "../controller/getMovies";
import { getUser } from "../controller/getUser";
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

     getById(id).then((resp) => {
        setMovieById(resp);
        setisLoading(false);
     });
        

    return {movieById, isLoading};

}

export const useGetSilimarMovies = (movieD) => {



    const [similarMovies, setSimilarMovies] = useState([]);

    searchMovieApi(movieD).then((movies) => {  
        
        setSimilarMovies(movies);
    });

    console.log(similarMovies)

    return similarMovies;
}

export const verifyUser = async (email, password) => {

        const user = await getUser(email, password);

        return user;



}



