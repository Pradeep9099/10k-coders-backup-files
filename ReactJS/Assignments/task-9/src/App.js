
import ClassDemo1 from './class components/ClassDemo1';
import Demo1 from './functional components/Demo1';

function App() {
  return (
    <div className="App">
      <h1> Functional Demo Section</h1> <hr/>
      <Demo1/> <hr/> 
      <h1> Class Demo Section</h1> <hr/>
      <ClassDemo1/>

    </div>
  );
}

export default App;
