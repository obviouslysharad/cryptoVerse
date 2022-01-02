import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CoinPage from "./components/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" components={Homepage} />
      <Route path="/coins/:id" components={CoinPage} exact />
    </BrowserRouter>
  );
}

export default App;
