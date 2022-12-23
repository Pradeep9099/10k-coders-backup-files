import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contacts from "./Components/Contacts";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
