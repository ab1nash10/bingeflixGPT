import { IMG_URL } from "@/utils/constants";
type MovieCardsProp = {
  poster_path: string;
  title?: string;
  movie: React.ReactNode;
  id: number;
};
const MovieCards = ({ poster_path, title }: MovieCardsProp) => {
  const truncate = (string: string, n: number) => {
    return string.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  return (
    <>
      {poster_path && (
        <div className="w-[160px] sm:w-[170px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 card ">
          <img
            className="w-full h-auto block"
            src={IMG_URL + poster_path}
            alt={title}
          />
          <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {truncate(title, 35)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCards;
