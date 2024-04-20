import { addMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAddNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = response.data;
      console.log(data);
      dispatch(addMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useAddNowPlayingMovies;
