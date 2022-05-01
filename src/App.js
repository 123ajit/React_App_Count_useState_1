import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState();
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState("");

  const updateCount = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setFlag(true);
    setValue(e.target.value);
  };
  return (
    <>
      <h1 onClick={updateCount}>Hello world</h1>
      <input type="text" onChange={handleChange} value={value} /> <br />
      {value} {count} {flag}
    </>
  );
}
