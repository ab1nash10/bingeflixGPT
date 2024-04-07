import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Browse from "./components/Browse";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
const Layout = () => {
  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<Error />}>
        <Route path="" element={<SignIn />} />
        <Route path="user" element={<Navbar />} />
        <Route path="browse" element={<Browse />} />
      </Route>
    )
  );
  return (
    <div className="w-full h-screen">
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default Layout;
