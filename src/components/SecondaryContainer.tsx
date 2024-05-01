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
        <MovieList
          rowId={1}
          title={"Now Playing"}
          movies={movies?.nowPlayingMovie}
        />
        <MovieList
          rowId={2}
          title={"Popular Movies"}
          movies={movies?.popularMovie}
        />
        <MovieList
          rowId={3}
          title={"Top Rated"}
          movies={movies?.topRatedMovies}
        />
        <MovieList
          rowId={4}
          title={"Upcoming Movies"}
          movies={movies?.upcomingMovies}
        />
      </div>
    )
  );
};

export default SecondaryContainer;
