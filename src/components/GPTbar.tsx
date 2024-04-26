import langConst from "@/utils/langConst";
import { useSelector } from "react-redux";
import image from "../assets/chat-gpt1.png";
const GPTbar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  return (
    <div className="container mx-auto mt-36 rounded-lg font-poppins ">
      <form className="flex relative ">
        <input
          type="text"
          name="searchbox"
          id="searchbar"
          autoComplete="false"
          required
          placeholder={
            langConst[selectedLang as keyof typeof langConst].gptPlaceholder
          }
          className="w-full h-14 px-4 py-2 outline-none bg-[#121113] rounded-r-[20px] capitalize text-xl"
        />
        <button className="bg-[#6f1d1b] px-4 rounded-full absolute right-0 hover:bg-[#6f1c1be5]">
          <img src={image} alt="searchLogo" className="h-14 px-3 py-3" />
        </button>
      </form>
    </div>
  );
};

export default GPTbar;
