import { addTopRatedMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAddTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movies?.topRatedMovies);
  const addTopRatedMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const data = response.data;
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !topRatedMovie && addTopRatedMovie();
  }, []);
};

export default useAddTopRatedMovies;
