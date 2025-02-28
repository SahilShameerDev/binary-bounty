import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WordScramble.css";

const wordList = [
  { scrambled: "YPTNOH", correct: "PYTHON" },
  { scrambled: "TPAVASRICJ", correct: "JAVASCRIPT" },
  { scrambled: "TASEADAB", correct: "DATABASE" },
  { scrambled: "PORAGMR", correct: "PROGRAM" },
  { scrambled: "ROFEMARKW", correct: "FRAMEWORK" },
  { scrambled: "TERNITEN", correct: "INTERNET" },
  { scrambled: "CNECOITNNO", correct: "CONNECTION" },
];

const CLUE_LETTER = "B";

const WordScramble = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [clueVisible, setClueVisible] = useState(false);
  const [clueClicked, setClueClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentWordIndex(Math.floor(Math.random() * wordList.length));
  }, []);

  const { scrambled, correct } = wordList[currentWordIndex];

  const handleSubmit = () => {
    if (userInput.toUpperCase() === correct) {
      setMessage("✅ Correct! Click the letter below to store it.");
      setClueVisible(true);
    } else {
      setMessage("❌ Incorrect! Try again.");
      setUserInput("");
    }
  };

  const handleClueClick = () => {
    if (!clueClicked) {
      localStorage.setItem("clueTask1", CLUE_LETTER);
      setClueClicked(true);
      setMessage("✅ Key 'B' stored! You can now proceed.");
    }
  };

  const handleNextTask = () => {
    if (clueClicked) {
      navigate("/password-crack-t2");
    } else {
      setMessage("❗ Click the letter first to store your key.");
    }
  };

  return (
    <div className="word-scramble-container">
      <h2 className="Title">🔡 Word Scramble Challenge</h2>
      <p>Unscramble the word below to find a tech-related term:</p>
      <h3 className="scrambled-word">{scrambled}</h3>

      <input
        type="text"
        placeholder="Your answer"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="submitBtn" onClick={handleSubmit}>Submit</button> <br /><br />

      {message && <p className="result-message">{message}</p>}

      {clueVisible && (
        <>
          <p className="clue-instruction">
            🔑 Click this letter! You need to collect all hidden letters from upcoming tasks.
          </p>
          <h3
            className="clue-letter"
            onClick={handleClueClick}
            style={{
              cursor: clueClicked ? "default" : "pointer",
              color: clueClicked ? "green" : "blue",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
          >
            {CLUE_LETTER}
          </h3>
        </>
      )}

      <button className="nextBtn" onClick={handleNextTask}>Next Task</button>
    </div>
  );
};

export default WordScramble;
