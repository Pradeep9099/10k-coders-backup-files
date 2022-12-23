
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Business from "./Components/Business";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
