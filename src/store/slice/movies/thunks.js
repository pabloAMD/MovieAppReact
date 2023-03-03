import {  setMovies, startLoadingMovies } from "../moviesSlice";
import { getMovies } from "../../../movies/controller/getMovies";
import { searchMovieApi } from "../../../movies/controller/searchMovie";
import { getSimilarMovies } from "../../../movies/controller/getSimilarMovies";
import { setMoviesCategories, startLoadingMoviesCategories } from "../moviesCategories";

export const getTotalMovies = (page = 1, finMovies=6) => {
  return async (dispatch,getState) => {

 
    dispatch(startLoadingMovies());

   

    const {movies,count} =  await getMovies(page);
   



    dispatch(setMovies({movies:movies, page:page, count:count, finMovies:finMovies}));
    
  };
}

export const searchMovieBYTitle = ( title,page = 1, finMovies=6) => {
  return async (dispatch,getState) => {

    dispatch(startLoadingMovies());

    const {movies,count} =  await searchMovieApi(title,page,finMovies);
   
    dispatch(setMovies({movies:movies, page:page, count:count, finMovies:finMovies}));
    
  };
}

export const getMoviesByGenre = ( categoryName)=>{
 
  return async (dispatch,getState) => {
    dispatch(startLoadingMoviesCategories());
    const movies = await getSimilarMovies(categoryName);
    dispatch(setMoviesCategories({moviesCategories:movies}))

  };
}


