import { addTopRatedMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAddTopRatedMovies = () => {
  const dispatch = useDispatch();
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
    addTopRatedMovie();
  }, []);
};

export default useAddTopRatedMovies;
