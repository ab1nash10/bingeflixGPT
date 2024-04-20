import useAddNowPlayingMovies from "@/hooks/useAddNowPlayingMovies";
import Header from "./Header";
const Browse = () => {
  useAddNowPlayingMovies();
  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
