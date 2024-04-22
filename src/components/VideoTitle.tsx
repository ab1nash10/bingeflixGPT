type VideoProps = {
  title: string;
  overview: string;
};
import { BadgeInfo, Play } from "lucide-react";
const VideoTitle = ({ title, overview }: VideoProps) => {
  return (
    <div className="absolute mt-56 px-36">
      <h1 className="text-5xl font-poppins py-3">{title}</h1>
      <p className="text-xl font-jost mt-10 py-8 w-1/2">{overview}</p>
      <div className="text-2xl font-poppins items-center flex">
        <button className="bg-white mr-5 rounded px-4">
          <span className="flex items-center px-3 py-3 text-black">
            <Play color="black" size={32} fill="black" />
            <h1 className="pl-2">Play</h1>
          </span>
        </button>
        <button className="bg-red-500 mr-5 rounded px-4">
          <span className="flex items-center px-3 py-3 text-white">
            <BadgeInfo size={32} />
            <h1 className="pl-2">More Info</h1>
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
