import React from "react";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return <div>{children}</div>;
};

export default AuthProvider;