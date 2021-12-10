import GlobalStyles from "./styles/global";
import { Route } from "react-router-dom";
import PageButton from "./components/PageButton";
function App() {
  return (
    <>
      <GlobalStyles />
      <Route />
      <PageButton left />
      <PageButton right />
    </>
  );
}

export default App;
