import { createSlice } from '@reduxjs/toolkit'


export const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    page : 1,
    movies : [],
    isLoading : false,
    finMovies : -6,
    count : 0,
  },
  reducers: {
    startLoadingMovies: (state, ) => {
        state.isLoading = true;
    },

    

    setMovies: (state, action) => {
        
        state.isLoading = false;
        state.page = action.payload.page;
        state.movies = action.payload.movies;
        state.count = action.payload.count;
        state.finMovies = action.payload.finMovies;

    },

  },
})

// Action creators are generated for each case reducer function
export const { startLoadingMovies, setMovies } = moviesSlice.actions

