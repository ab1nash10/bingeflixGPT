import { IMG_URL } from "@/utils/constants";
type MovieCardsProp = {
  poster_path: string;
  title?: string;
};
const MovieCards = ({ poster_path, title }: MovieCardsProp) => {
  return (
    <>
      {poster_path && (
        <div className="w-full md:w-48 md:px-3 md:py-4">
          <img
            src={IMG_URL + poster_path}
            alt={title}
            className="rounded-lg h-[250px] w-[250px]"
          />
          {title}
        </div>
      )}
    </>
  );
};

export default MovieCards;
