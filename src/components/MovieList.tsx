import MovieCards from "./MovieCards";

type movieProp = {
  movies: React.ReactNode;
  title: string;
};
const MovieList = ({ movies, title }: movieProp) => {
  // console.log(movies);
  return (
    <div className="md:px-4 md:mb-10 font-poppins">
      <h1 className="md:pl-3 md:text-4xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCards
              key={movie.id}
              title={movie?.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
