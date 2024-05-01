import { addGptMovieResult } from "@/Store/Slices/gptSlice";
import { API_OPTIONS } from "@/utils/constants";
import langConst from "@/utils/langConst";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/chat-gpt1.png";

const GPTbar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movies: string) => {
    try {
      const response = await axios(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movies +
          "&include_adult=false&page=1",
        API_OPTIONS
      );
      const data = response.data;
      return data.results;
    } catch (error) {
      console.log(error);
    }
  };
  const handleGPTsearch = async () => {
    try {
      const question = `Act as a movie Recommendation system and suggest some movies for the query
      ${searchText?.current?.value} only give me names of top 5 movies and make it comma separated just like the examples ahead. Example: Tenet, Batman, Intersteller, kung fu panda, shaolin soccer`;
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      // console.log(response);

      const gptMovies =
        response.data?.candidates?.[0].content.parts?.[0].text.split(",");
      const promiseArray = gptMovies.map((movie: string) =>
        searchMovieTMDB(movie)
      );
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto pt-36 rounded-lg font-poppins ">
      <form className="flex relative" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="searchbox"
          id="searchbar"
          autoComplete="false"
          required
          placeholder={
            langConst[selectedLang as keyof typeof langConst].gptPlaceholder
          }
          ref={searchText}
          className="w-full h-14 px-4 py-2 outline-none bg-[#121113] rounded-r-[28px] capitalize text-xl"
        />
        <button
          className="bg-[#6f1d1b] px-4 rounded-full absolute right-0 hover:bg-[#6f1c1be5]"
          onClick={handleGPTsearch}
        >
          <img src={image} alt="searchLogo" className="h-14 px-3 py-3" />
        </button>
      </form>
    </div>
  );
};

export default GPTbar;
