import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { useState } from 'react';
import { MyContextProvider } from './Components/MyContext';

function App() {
  const [users, setUsers] = useState (["Murali","Ravi","Arun"]) 
  return (
    <div className="App">
      <MyContextProvider>
     {/* <Main allUsers={users}/> */}
     </MyContextProvider>
    </div>
  );
}

export default App;
