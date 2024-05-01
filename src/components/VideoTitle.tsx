type VideoProps = {
  title: string;
  overview: string;
};
import { BadgeInfo, Play } from "lucide-react";
const VideoTitle = ({ title, overview }: VideoProps) => {
  const truncate = (string: string, n: number) => {
    return string?.length > n ? string?.substring(0, n - 1) + "..." : string;
  };
  return (
    <div className="absolute mt-80 px-12 md:mt-56 md:px-36 z-10">
      <h1 className="text-lg lg:text-5xl font-poppins lg:py-3">{title}</h1>
      <p className="opacity-45 text-sm lg:text-xl font-jost mt-2 lg:mt-10 py-4 lg:py-8 w-[95%] lg:w-1/2">
        {truncate(overview, 240)}
      </p>
      <div className="text-sm lg:text-2xl font-poppins items-center flex">
        <button className="bg-white mr-2 lg:mr-5 rounded px-2 lg:px-4 hover:opacity-70">
          <span className="flex items-center px-1 py-1 lg:px-3 lg:py-3 text-black">
            <Play color="black" size={32} fill="black" className="h-[25px]" />
            <h1 className="pl-2">Play</h1>
          </span>
        </button>
        <button className="bg-red-500 mr-2 lg:mr-5 rounded px-2 lg:px-4 hover:opacity-70">
          <span className="flex items-center px-1 py-1 lg:px-3 lg:py-3 text-white">
            <BadgeInfo size={32} className="h-[25px]" />
            <h1 className="pl-2">More Info</h1>
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
