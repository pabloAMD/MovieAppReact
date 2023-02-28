
import { Routes, Route } from "react-router-dom";
import { MovieDetailPrivate } from "../movies/private/pages/MovieDetailPrivate";

import { ErrorPage } from "../movies/public/pages/ErrorPage";


import { Home } from "../movies/public/pages/Home";
import { Login } from "../movies/public/pages/Login";
import { MovieDetail } from "../movies/public/pages/MovieDetail";
import { Register } from "../movies/public/pages/Register";



export const AppRouter = () => {



  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
        <Route path="/movie-detail/actions/:id" element={<MovieDetailPrivate/>} />



      </Routes>
    </>
  )
}
