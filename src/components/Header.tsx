/**
 * Renders the header component.
 * @returns The JSX element representing the header.
 */
import { changeLang } from "@/Store/Slices/configSlice";
import { toggleShowGPT } from "@/Store/Slices/gptSlice";
import { removeUsers } from "@/Store/Slices/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from "@/utils/constants";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../assets/chat-gpt.png";
import { auth } from "../utils/firebase";
const Header = () => {
  // const [optVisible, setOptVisible] = useState(false);
  const optVisible = useSelector((store) => store.gpt?.toggleGPT);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUsers());
      })
      .catch(() => {
        navigate("/error");
      });
  };
  const handleShowGPT = () => {
    dispatch(toggleShowGPT());
  };
  const handleLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="w-full  header px-36 z-20 flex justify-between items-center">
      <div>
        <img
          src={LOGO}
          alt="BingeFlix image"
          className="h-[50px] cursor-pointer"
        />
      </div>
      {user && (
        <div className="flex items-center">
          {optVisible && (
            <select
              className="bg-[#2e282a] font-poppins text-white py-2 pl-2 pr-1 mr-2 rounded-lg text-center"
              onChange={handleLang}
            >
              {SUPPORTED_LANG.map((options) => (
                <option key={options.identifier} value={options.identifier}>
                  {options.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="flex bg-[#2e282a] px-3 py-2 mr-2 items-center font-poppins rounded-lg hover:opacity-65"
            onClick={handleShowGPT}
          >
            <img src={image} alt="logo" className="h-6 w-6 mr-2 opacity-75" />
            {optVisible ? <h1>Home</h1> : <h1>GPT Search</h1>}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage
                  src={USER_AVATAR}
                  className="cursor-pointer outline-none"
                />
                <AvatarFallback>USER</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-poppins text-xl 2xl:mt-[-43px] 2xl:ml-[181px]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="capitalize">
                {user?.displayName}
              </DropdownMenuItem>

              <DropdownMenuItem>Liked Movies</DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                Log Out<p className="pl-2 ">{<LogOut />}</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Header;
