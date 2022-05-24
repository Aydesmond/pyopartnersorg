import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About/About";
import OurMission from "./pages/Ourmission/Ourmission";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/ourmission" element={<OurMission />} />
      </Routes>
    </Router>
  );
}

export default App;
