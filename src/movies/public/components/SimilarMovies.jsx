import { MovieItem } from "./MovieItem"


export const SimilarMovies = ({movies}) => {
   return ( 
    <div className="card-gridSimilars">
    {
      movies.map(movie => (
        <MovieItem key={movie.id} movie = { movie} />
      ))
    }
    </div>
   
  )
}
