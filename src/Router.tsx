import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Browse from "./components/Browse";
import Error from "./components/Error";
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
          path: "/",
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
      ],
    },
  ]
  // { basename: "/app" }
);
export default mainRouter;
