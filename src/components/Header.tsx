/**
 * Renders the header component.
 * @returns The JSX element representing the header.
 */
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
import { LOGO, USER_AVATAR } from "@/utils/constants";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
const Header = () => {
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
  return (
    <div className="container header mx-auto z-20 flex justify-between items-center">
      <div>
        <img
          src={LOGO}
          alt="BingeFlix image"
          className="h-[50px] cursor-pointer"
        />
      </div>
      {user && (
        <div>
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
              <DropdownMenuItem>Subscription</DropdownMenuItem>
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
