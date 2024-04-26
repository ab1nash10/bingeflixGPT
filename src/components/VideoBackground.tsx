import useGetTrailer from "@/hooks/useGetTrailer";
import { useSelector } from "react-redux";

type VideoBackgroundProps = {
  movieId: number;
};
const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const trailer = useSelector((store) => store.movies?.trailer);
  useGetTrailer({ movieId });
  return (
    <div className="w-screen">
      <div className="opacity-70 pointer-events-none overflow-hidden relative top-24 md:top-[-56px] left-0">
        <iframe
          className="w-screen aspect-video scale-125"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?vq=hd720p&showinfo=0&autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=" +
            trailer?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
    // <div>
    //   <div className="opacity-70 overflow-hidden absolute top-[-120px] md:top-[-20px] left-0 w-full h-screen pointer-events-none">
    //     <iframe
    //       className="scale-125 w-full h-screen"
    //       src={
    //         "https://www.youtube.com/embed/" +
    //         trailer?.key +
    //         "?showinfo=0&autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=" +
    //         trailer?.key
    //       }
    //       title="YouTube video player"
    //     ></iframe>
    //   </div>
    // </div>
  );
};

export default VideoBackground;
