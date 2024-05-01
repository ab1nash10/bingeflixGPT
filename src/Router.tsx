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
      children: [
        {
          path: "/",
          element: <SignIn />,
          index: true,
        },
        {
          path: "/watch/:contentId",
          element: <Navbar />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "error",
          element: <Error />,
        },
      ],
      errorElement: <Error />,
    },
  ]

  // { basename: "/app" }
);
export default mainRouter;

// path: "/",
// element: <App />,
// children: [
//   {
//     path: "/",
//     element: <RouteType type="public"><Home /></RouteType>,
//   },
//   {
//     path: "/browse",
//     element: <RouteType type="private"><Browse /></RouteType>,
//   },
//   {
//     path: "/tv-shows",
//     element: <RouteType type="private"><TvShows /></RouteType>,
//   },
//   {
//     path: "/latest",
//     element: <RouteType type="private"><Latest /></RouteType>,
//   },
//   {
//     path: "/movies",
//     element: <RouteType type="private"><Movies /></RouteType>,
//   },
//   {
//     path: "/search",
//     element: <RouteType type="private"><Search /></RouteType>,
//   },
//   {
//     path: "/movie-assistant",
//     element: <RouteType type="private"><Search /></RouteType>
//   },
//   {
//     path: "/watch/:contentId",
//     element: <RouteType type="private"><Watch /></RouteType>
//   },
//   {
//     path: "/login",
//     element: <RouteType type="public"><SignIn /></RouteType>,
//   },
//   {
//     path: "/signup",
//     element: <RouteType type="public"><SignUp /></RouteType>,
//   },
//   {
//     path: '/profile',
//     element: <RouteType type="private"><Profile /></RouteType>
//   },
//   {
//     path: '/about',
//     element: <RouteType type="global"><About /></RouteType>
//   }
// ],
// errorElement: <NotFoundPage />
// }
