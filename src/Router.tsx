import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Browse from "./components/Browse";
import Error from "./components/Error";
import LikedMovies from "./components/LikedMovies";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";

const mainRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/signin",
          element: <SignIn />,
          index: true,
        },
        {
          path: "user",
          element: <Navbar />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "error",
          element: <Error />,
        },
        {
          path: "liked",
          element: <LikedMovies />,
        },
      ],
    },
  ]
  // { basename: "/app" }
);
export default mainRouter;
