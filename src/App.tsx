import "./App.css";

import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark"></ThemeProvider>
    </>
  );
}

export default App;
