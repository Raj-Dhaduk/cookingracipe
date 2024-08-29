import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/home";
import RacipePage from "./pages/racipePage/racipe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/racipe/:id" element={<RacipePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
