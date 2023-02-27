
import { Routes,Route } from "react-router-dom";
import { ErrorPage } from "../movies/pages/ErrorPage";


import { Home } from "../movies/pages/Home";
import { MovieDetail } from "../movies/pages/MovieDetail";



export const AppRouter = () => {



  return (
    <>
     <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<ErrorPage/>} />
         <Route path="/movie-detail/:id" element={<MovieDetail/>} />
        
     </Routes>
    </>
  )
}
