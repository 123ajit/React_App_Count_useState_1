import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(() => 0);
  // const [flag, setFlag] = useState(false);
  // const [value, setValue] = useState("");

  // const updateCount = () => {
  //   setCount(count + 1);
  // };

  // const handleChange = (e) => {
  //   setFlag(true);
  //   setValue(e.target.value);
  // };
  return (
    <>
      <button onClick={() => setCount((x) => x + 1)}>++</button>
      <button onClick={() => setCount(0)}> reset</button>
      <button onClick={() => setCount((x) => x - 1)}>--</button>
      {count}
    </>
  );
}
