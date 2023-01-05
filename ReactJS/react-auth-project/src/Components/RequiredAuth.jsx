import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const RequiredAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  if (!auth.user) {
    return (
      <>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <p style={{ color: "red" }}>Please login to View the Prodcts !!</p>
      </>
    );
  }
  return children;
};