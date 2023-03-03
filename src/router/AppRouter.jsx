
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../movies/auth/context/AuthContext";
import { CreateMovie } from "../movies/private/pages/CreateMovie";
import { MovieDetailPrivate } from "../movies/private/pages/MovieDetailPrivate";
import { Categories } from "../movies/public/components/Categories";
import { About } from "../movies/public/pages/About";

import { ErrorPage } from "../movies/public/pages/ErrorPage";


import { Home } from "../movies/public/pages/Home";
import { Login } from "../movies/public/pages/Login";
import { MovieDetailPublic } from "../movies/public/pages/MovieDetailPublic";
import { Register } from "../movies/public/pages/Register";



export const AppRouter = () => {

  const { logged } = useContext(AuthContext);

  return (
    <>
      <Routes>


        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ !logged ? <Login/>:(<Navigate to={'/'} replace/>)} />
        <Route path="/register" element={!logged ? <Register /> :(<Navigate to={'/'} replace/>) } />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/movie-detail/:id" element={!logged ? <MovieDetailPublic/> :(<Navigate to={'/'} replace/>) } />
        <Route path="/movie-detail/actions/:id" element={logged ? <MovieDetailPrivate/> : (<Navigate to={'/home'} replace/>)} />
        <Route path="/about" element={<About/>} />
        <Route path="/create-movie" element={logged ? <CreateMovie/>: (<Navigate to={'/'} replace/>) } />
      </Routes>
    </>
  )
}
