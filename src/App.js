import GlobalStyles from "./styles/global";
import { Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <GlobalStyles />
      <Route />
      <Header />
    </>
  );
}

export default App;
