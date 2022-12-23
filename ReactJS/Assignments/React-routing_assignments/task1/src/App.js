import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Contacts from './Components/Contacts';
import AboutUs from './Components/AboutUs';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/aboutus" element ={<AboutUs/>}/>
      <Route path="/contacts" element ={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
