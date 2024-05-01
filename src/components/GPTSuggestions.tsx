import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames) {
    // TODO: make an shimmer ui
    return null;
  }
  return (
    <div className="py-14 px-10">
      {movieNames.map((movieName: string, index: number) => (
        <MovieList
          key={movieName}
          movies={movieResults[index]}
          title={movieName}
          rowId={index}
        />
      ))}
    </div>
  );
};

export default GPTSuggestions;
