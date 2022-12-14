import logo from './logo.svg';
import './App.css';
import { MainClassComp } from './Components/MainClassComp';
import Students from './Components/Students';
import Employee from './Components/Employee';
import ParentComponent from './Components/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <MainClassComp/> */}
      {/* <Students/> */}
      {/* <Employee/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;