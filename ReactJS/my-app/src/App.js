// import TenKCoders from './Components/TenKCoders';
// import TenKFunctionalComp from './Components/TenKFunctionalComp';
import MainClassComponent, { ChildClassComponent, SiblingChildClassComp } from './Components/MultipleClassComponents';
import ABC from './Components/MultipleFunctonalCompoents' // Default Component Can be Imported by Any Name
import MainFunction, { ParentComponent, ChildComponent } from './Components/MultipleFunctionalComponents'; // Specific component can be imported with destructering .
function App() {
  return (
    <div className="App">
      <h2>Hello from 10K Coders</h2>
      {/* <TenKCoders/>
      <TenKFunctionalComp/> */}
      {/* <ParentComponent /><ChildComponent />
      <ABC /> */}
      {/* <MainClassComponent/>
      <ChildClassComponent/>
      <SiblingChildClassComp/> */}
      {/* <MainFunction/> */}
      <MainFunction/>
      <MainClassComponent/>
    </div>
  );
}

export default App;