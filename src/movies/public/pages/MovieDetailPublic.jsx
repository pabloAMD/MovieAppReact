import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading';
import { SimilarMovies } from '../components/SimilarMovies';
import { getById } from '../../controller/getById';
import { MovieDetail } from '../components/MovieDetail';
import { getsimilarMoviesApi } from '../../hooks/useFetchApi';

export const MovieDetailPublic = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [movieById, setMovieById] = useState(0);

    const [similarMovies, setsimilarMovies] = useState([]);
    const [genreM, setGenreM] = useState('');

    useEffect(() => {

        getById(id).then((data) => {
            setMovieById(data);
            setGenreM(data.Genre);
            setIsLoading(false);

        });
        if (genreM !== '') {
            
             getsimilarMoviesApi(genreM.split(',',1)).then((data) => {

            const moviesS = data.slice(0, 3);
            setsimilarMovies(moviesS);
            
        });
            
        }

       





    }, [isLoading])



    return (
        <>
            <NavBar />

            {
                isLoading && (<Loading />)
            }

            


            <MovieDetail movieById={movieById}/>
            <div className='py-5 mx-16'>
                <h1>Similares</h1>

                <SimilarMovies movies={similarMovies} />
            </div>
        </>
    )
}
