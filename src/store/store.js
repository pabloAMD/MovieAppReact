import { configureStore } from '@reduxjs/toolkit'
import { componentsSlice } from './slice/componentsSlice'
import { moviesCategoriesSlice } from './slice/moviesCategories'
import { moviesSlice } from './slice/moviesSlice'

export const store = configureStore({
  reducer: {
    moviesT: moviesSlice.reducer,
    componentState: componentsSlice.reducer,
    categoriesMovies: moviesCategoriesSlice.reducer,
  },

  
})