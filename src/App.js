import React, { useState } from "react";

function App() {
  const [isValid, setIsValid] = useState(true);

  const changeColors = (event) => {
    console.log("click me");
    event.preventDefault();

    setIsValid(false);
    return;
  };
  return (
    <div>
      <p
        style={{
          color: !isValid ? "green" : "red",
          backgroundColor: !isValid ? "yellow" : "green",
        }}
      >
        Goals
      </p>
      <button onClick={changeColors}>click me</button>
    </div>
  );
}

export default App;
