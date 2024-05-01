import { addUpcomingMovies } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAddUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
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
    !upcomingMovies && addUpComingMovie();
  }, []);
};

export default useAddUpcomingMovies;
