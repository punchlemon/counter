import React, { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello, World!
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      {count}
    </span>
  );
}

export default App;
