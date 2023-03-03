import { createSlice } from '@reduxjs/toolkit'


export const moviesCategoriesSlice = createSlice({
  name: 'categories',
  initialState:{
    moviesCategories : [],
    isLoading : true,
  },
  reducers: {
    startLoadingMoviesCategories: (state, ) => {
        state.isLoading = true;
    },

    

    setMoviesCategories: (state, action) => {
        
        state.isLoading = false;
       
        state.moviesCategories = action.payload.moviesCategories;
    


    },

  },
})


export const { startLoadingMoviesCategories, setMoviesCategories } = moviesCategoriesSlice.actions

