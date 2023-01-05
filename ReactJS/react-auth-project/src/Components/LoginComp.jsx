import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const LoginComp = () => {
  const [userName, setUser] = useState("");
  const { user,login } = useAuth();
  const navigate = useNavigate()
  const handleLogin = ()=>{
    login(userName);
    navigate('/products')
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />{" "}
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginComp;