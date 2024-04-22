import useGetTrailer from "@/hooks/useGetTrailer";
import { useSelector } from "react-redux";

type VideoBackgroundProps = {
  movieId: number;
};
const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const trailer = useSelector((store) => store.movies?.trailer);

  useGetTrailer({ movieId });
  return (
    <div className="relative">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
