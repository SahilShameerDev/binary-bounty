import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
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

const WordScramble = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // For redirecting

  // Pick a random word at the start
  useEffect(() => {
    setCurrentWordIndex(Math.floor(Math.random() * wordList.length));
  }, []);

  const { scrambled, correct } = wordList[currentWordIndex];

  const handleSubmit = () => {
    if (userInput.toUpperCase() === correct) {
      setMessage("✅ Correct! Moving to the next page...");
      setTimeout(() => navigate("/next-page"), 1000); // Redirect after 1 second
    } else {
      setMessage("❌ Incorrect! New word generated.");
      setUserInput("");
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordList.length); // Change word
    }
  };

  return (
    <div className="word-scramble-container">
      <h2>🔡 Word Scramble Challenge</h2>
      <p>Unscramble the word below to find a tech-related term:</p>
      <h3 className="scrambled-word">{scrambled}</h3>

      <input
        type="text"
        placeholder="Your answer"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {message && <p className="result-message">{message}</p>}
    </div>
  );
};

export default WordScramble;
