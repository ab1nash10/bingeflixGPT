import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import MovieCards from "./MovieCards";

type movieProp = {
  movies: React.ReactNode;
  title: string;
  rowId: number;
};
const MovieList = ({ movies, title, rowId }: movieProp) => {
  // console.log(movies);
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4 font-poppins">
        {title}
      </h2>
      <div className="relative flex items-center group font-poppins ">
        {movies?.length > 7 ? (
          <CircleChevronLeft
            onClick={slideLeft}
            className=" left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        ) : null}

        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative cards "
        >
          {movies.map((movie) => (
            <MovieCards
              key={movie.id}
              poster_path={movie.backdrop_path}
              title={movie.title}
              movie={movie}
              id={movie.id}
            />
          ))}
        </div>
        {movies?.length > 7 ? (
          <CircleChevronRight
            onClick={slideRight}
            className=" right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        ) : null}
      </div>
    </>
  );
};

export default MovieList;
