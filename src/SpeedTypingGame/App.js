import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    // console.log(text);
    const { value } = e.target;
    setText(value);
  }

  function wordCount(str) {
    const wordArray = str.trim().split(" ")
    // console.log(wordArray);
    return wordArray.filter(word => word !== "").length
  }

  return (
    <div>
      <h1>Speed Typing Game!</h1>
      <textarea
        placeholder="Ready to type?"
        name="textarea"
        value={text}
        onChange={handleChange}
      />
      <h4>Time Remaining:</h4>
      <button
        onClick={() => {
          wordCount(text);
        }}
      >
        Start the Game!
      </button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
