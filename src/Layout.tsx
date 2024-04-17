import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { addUsers, removeUsers } from "./Store/Slices/userSlice";
import { auth } from "./utils/firebase";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName })
        );
        navigate("browse");
      } else {
        dispatch(removeUsers());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};

export default Layout;
