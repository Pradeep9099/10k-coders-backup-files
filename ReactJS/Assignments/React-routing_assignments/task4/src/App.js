import {Routes,Route, BrowserRouter} from 'react-router-dom';
import About from './Components/About';
import Careers from './Components/Careers';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
