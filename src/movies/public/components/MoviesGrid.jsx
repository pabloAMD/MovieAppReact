import { MovieItem } from "./MovieItem";

export const MoviesGrid = ({ movie }) => {
  return ( 

   
    <div className="card-grid">
    {
      movie.map(movie => (
        
        <MovieItem key={movie.id} movie = { movie} />
      ))
    }
    </div>
   
  )
}
