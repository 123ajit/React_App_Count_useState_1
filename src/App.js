import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [submitded, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (user.name && user.email) {
      setSubmitted(true);
    }
    setMessage("please enter value");
    return;
  };

  return (
    <form>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />{" "}
      <br />
      <br />
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <br />
      <button onCLick={handleSubmit}> submit </button>
      <br />
      <br />
      {user.name}
      {user.email}
      {message}
    </form>
  );
}
