import { addUpcomingMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAddUpcomingMovies = () => {
  const dispatch = useDispatch();
  const addUpComingMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const data = response.data;
      dispatch(addUpcomingMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    addUpComingMovie();
  }, []);
};

export default useAddUpcomingMovies;
