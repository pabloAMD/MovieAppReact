import { useEffect, useState } from "react";
import { createMovie } from "../controller/createMovie";
import { createUser } from "../controller/createUser";
import { DeleteMovieById } from "../controller/deleteMovie";
import { getById } from "../controller/getById";
import { getMovies } from "../controller/getMovies";
import { getSimilarMovies } from "../controller/getSimilarMovies";
import { getUser } from "../controller/getUser";
import { searchMovieApi } from "../controller/searchMovie";
import { updateMovie } from "../controller/updateMovie";


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

    return resu;
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



export const verifyUser = async (email, password) => {

        const user = await getUser(email, password);

        return user;

}

export const createNewUser = async(body) => {
  
    const status = await createUser(body);
    return status;
}

export const createNewMovieApi = async(body,ratings) => {

    const bodyNewMovie = {...body, Ratings:ratings};  
     const status = await createMovie(bodyNewMovie);
     return status;
}

export const deleteMovieApi = async(id) => {
        const status = await DeleteMovieById(id);
        return status;
}

export const updateMovieById = async(id, body) => {
    const status = await updateMovie(id, body);
    return status;
}

export const getsimilarMoviesApi = async(genre) => {


    const status = await getSimilarMovies(genre);
    return status;

}


