import { addTrailer } from "@/Store/Slices/moviesSlice";
import { API_OPTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetTrailer = ({ movieId }: { movieId: number }) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = response.data;
    console.log(data);
    const filterData = data.results.filter(
      (video: []) => video?.type == "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : data.results[0];
    console.log(trailer);
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetTrailer;
