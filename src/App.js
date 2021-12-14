import GlobalStyles from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />
      <Routes />
    </>
  );
}

export default App;
