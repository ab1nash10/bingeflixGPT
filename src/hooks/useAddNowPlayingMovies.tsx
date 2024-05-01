import { addMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAddNowPlayingMovies = () => {
  const nowPlayingMovie = useSelector((store) => store.movies?.nowPlayingMovie);
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = response.data;
      // console.log(data);
      dispatch(addMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !nowPlayingMovie && nowPlayingMovies();
  }, []);
};

export default useAddNowPlayingMovies;
