import HondaBike1 from "./Class Components/HondaBike1";
import Bike1 from "./Funtional Components/Bike1";

function App() {
  return (
    <div className="App">
      <h1> List of Bikes </h1> <hr />
      <h1> Hero Company</h1>
      <Bike1 />
      <h1> Honda Company</h1>
      <HondaBike1 />
    </div>
  );
}

export default App;
