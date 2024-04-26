import useAddNowPlayingMovies from "@/hooks/useAddNowPlayingMovies";
import useAddPopularMovies from "@/hooks/useAddPopularMovies";
import useAddTopRatedMovies from "@/hooks/useAddTopRatedMovies";
import useAddUpcomingMovies from "@/hooks/useAddUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useAddNowPlayingMovies();
  useAddPopularMovies();
  useAddTopRatedMovies();
  useAddUpcomingMovies();
  const gpt = useSelector((store) => store.gpt.toggleGPT);
  return (
    <>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
