import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameMode, setGameMode] = useState(false);
  const [numOfWords, setNumOfWords] = useState(0);

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
  // challenge: getting the textarea to only count the number of words in a string.

  function reset() {
    setTimeRemaining(5);
    setText("");
    setGameMode(true);
    setNumOfWords(0);
  }
  // challenge: added && operators which did not reset the number of words or the number. But its like setState. You wouldnt have that with and operators, you'd just do another setState to update the corresponding state you were targeting.

  function endGame() {
    setGameMode(false);
    setNumOfWords(wordCount(text));
  }
  // Remove from end condition and put it into an individual function. This allows for adding more stuff later on if necessary.

  useEffect(() => {
    if (timeRemaining > 0 && gameMode) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [gameMode, timeRemaining]);
  // challenge: trying to understand how to use useEffect correctly. SO far so good. Just messed up assigned a value at first.
  // Check state of game in the useEffect array
  // getting the word count was a challenge. Had to introduce a new state for that number and then use the countWords method to assign it that value.

  return (
    <div>
      <h1>Speed Typing Game!</h1>
      <textarea
        name="textarea"
        value={text}
        onChange={handleChange}
        disabled={!gameMode}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => reset()} disabled={gameMode}>
        Start the Game!
      </button>
      <h1>Word Count: {numOfWords} </h1>
    </div>
  );
}

// Challenge: making  button and textarea disabled depending on the status of gameMode state.

export default App;
