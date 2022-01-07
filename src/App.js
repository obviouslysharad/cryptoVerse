import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CoinPage from "./components/CoinPage";
import { makeStyles } from "@material-ui/core";
function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  return (
    <BrowserRouter>
      <div className={useStyles().App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
