import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./Components/Auth";
import LoginComp from "./Components/LoginComp";
import Navbar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import { RequiredAuth } from "./Components/RequiredAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <h2>Hello World from Auth Project</h2>
          <Routes>
            <Route path="/" element={<LoginComp />} />
            <Route
              path="/products"
              element={
                <RequiredAuth>
                  <Products />
                </RequiredAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;