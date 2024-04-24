import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovie &&
    movies?.popularMovie &&
    movies?.topRatedMovies &&
    movies?.upcomingMovies && (
      <div className="-mt-56 relative ml-12">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovie} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
