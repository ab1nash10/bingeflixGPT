import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./Router";
import appStore from "./Store/appStore";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <ThemeProvider defaultTheme="dark">
          <RouterProvider router={mainRouter} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
