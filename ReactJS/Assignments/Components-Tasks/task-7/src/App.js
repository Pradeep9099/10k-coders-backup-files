import Menu1 from "./Class components/Menu1";
import Base1 from "./functional components/Base1";

function App() {
  return (
    <div className="App">
      <h1> This is Basic </h1> <hr />
      <Base1 /> <hr/>
      <h1> This is Menu </h1>
      <Menu1/>
    </div>
  );
}

export default App;
