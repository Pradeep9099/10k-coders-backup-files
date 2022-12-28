import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Users from "./Components/Users";
import EditUser from "./Components/EditUser";
import DeleteUser from "./Components/DeleteUser";
import CreateUser from "./Components/CreateUser";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Users/>} />
          <Route path="/edit/:id" element={<EditUser/>} />
          <Route path="/delete/:id" element={<DeleteUser/>} />
          <Route path="/create" element={<CreateUser/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;