import React, { useState, useEffect, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameMode, setGameMode] = useState(false);
  const [numOfWords, setNumOfWords] = useState(0);
  const inputRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordCount(str) {
    const wordArray = str
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    return wordArray;
  }

  function reset() {
    setTimeRemaining(5);
    setText("");
    setGameMode(true);
    setNumOfWords(0);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setGameMode(false);
    setNumOfWords(wordCount(text));
  }

  useEffect(() => {
    if (timeRemaining > 0 && gameMode) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [gameMode, timeRemaining]);

  return (
    <div>
      <h1>Speed Typing Game!</h1>
      <textarea
        name="textarea"
        value={text}
        onChange={handleChange}
        disabled={!gameMode}
        ref={inputRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => reset()} disabled={gameMode}>
        Start the Game!
      </button>
      <h1>Word Count: {numOfWords} </h1>
    </div>
  );
}

export default App;