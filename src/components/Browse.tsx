import useAddNowPlayingMovies from "@/hooks/useAddNowPlayingMovies";
import useAddPopularMovies from "@/hooks/useAddPopularMovies";
import useAddTopRatedMovies from "@/hooks/useAddTopRatedMovies";
import useAddUpcomingMovies from "@/hooks/useAddUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useAddNowPlayingMovies();
  useAddPopularMovies();
  useAddTopRatedMovies();
  useAddUpcomingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
