import React, { useState } from "react";
import { useToast } from '@chakra-ui/react'
import './App.css';

const N = 10;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const toast = useToast()
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count < N) {
      setCount(count + 1);
    }
    else {
      toast({
        title: `${N} を超えた値になりません`,
        status: 'error',
        isClosable: true,
      })
    }
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      {count}
    </span>
  );
}

export default App;
