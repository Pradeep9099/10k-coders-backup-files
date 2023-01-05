import { useState } from "react";

export function User() {
  console.log(useState("Welcome to User Component"));
  
  const [message, setMessage] = useState("Welcome to User Component");

  return (
    <div>
      <h2>{message}</h2>
      <button
        onClick={() => {
          setMessage("I am Changed by setMessage !!!");
        }}
      >
        Change Message
      </button>
    </div>
  );
}