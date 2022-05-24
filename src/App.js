import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About/About";
import OurMission from "./pages/Ourmission/Ourmission";
import OurBoard from './pages/Ourboard/Ourboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/ourmission" element={<OurMission />} />
        <Route exact path="/our-board" element={<OurBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
