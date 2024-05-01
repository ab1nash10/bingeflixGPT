import { addPopularMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAddPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movies?.popularMovie);
  const addPopularMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?page=2",
        API_OPTIONS
      );
      const data = response.data;
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !popularMovie && addPopularMovie();
  }, []);
};

export default useAddPopularMovies;
