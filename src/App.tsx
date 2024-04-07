import Layout from "./Layout";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
