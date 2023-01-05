import './App.css';
import Employees from './Components/Employees';
import { Person } from './Components/Person';
import {  User } from './Components/User';
import UsrsCrud from './Components/UsrsCrud.jsx';

function App() {
  return (
    <div className="App">
    {/* <User/> */}
    {/* <Person/> */}
    {/* <Employees/> */}
    <UsrsCrud/>
    </div>
  );
}

export default App;

// 1. Functional Component wont Have Render Method . It will have return method only.
// 2. Functional component wont have State . We will have hooks (UseState).
// 3. Functional Component wont have LifeCycleHooks . 
// 4. functional Component does not require 'this' 
// We will have hooks (useEffect . this hook equal to Component did mount )
//