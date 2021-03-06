import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About/About";
import OurMission from "./pages/Ourmission/Ourmission";
import OurBoard from './pages/Ourboard/Ourboard';
import FAQ from './pages/FAQ/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/ourmission" element={<OurMission />} />
        <Route exact path="/our-board" element={<OurBoard />} />
        <Route exact path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
