import DCList1 from "./Class Components/DCList1";
import MoviesList1 from "./functional components/MoviesList1";
function App() {
  return (
    <div className="App">
    <h1> Marvel MoviesList - Order</h1>
    <MoviesList1/>
    <h1> DC MoviesList - Order</h1>
    <DCList1/>

    </div>
  );
}

export default App;
