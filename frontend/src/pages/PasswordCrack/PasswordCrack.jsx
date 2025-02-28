import React, { useState } from "react";
import "./PasswordCrack.css";
import { useNavigate } from "react-router-dom";

const generateCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString(); // Ensures a 4-digit number
};

const PasswordCrack = ({ onSuccess }) => {
  const [password] = useState(generateCode());
  const [userGuess, setUserGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [message, setMessage] = useState("");
  const [clueClicked, setClueClicked] = useState(false);
  const navigate = useNavigate();

  const checkGuess = () => {
    if (userGuess.length !== 4) {
      setMessage("⚠️ Enter a 4-digit number!");
      return;
    }

    if (userGuess === password) {
      setMessage("✅ Correct! Moving to the next level!");
      navigate("/calculator-t3");
      return;
    }

    let feedback = "";
    for (let i = 0; i < 4; i++) {
      if (userGuess[i] === password[i]) {
        feedback += "✔ "; // Correct and in place
      } else if (password.includes(userGuess[i])) {
        feedback += "❓ "; // Correct but wrong place
      } else {
        feedback += "❌ "; // Incorrect
      }
    }

    setAttempts([...attempts, { guess: userGuess, feedback }]);
    setMessage("❌ Incorrect! Try again.");
    setUserGuess("");
  };

  const handleClueClick = () => {
    if (!clueClicked) {
      localStorage.setItem("clueTask2", "Y");
      setClueClicked(true);
      setMessage("✅ Key 'Y' stored in local storage!");
    }
  };

  return (
    <div className="password-crack-container">
      <h2>🔐 Password Cracking Challenge</h2>
      <p>Guess the secret 4-digit code! Feedback will help you.</p>

      <input
        type="number"
        placeholder="Enter 4-digit code"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value.slice(0, 4))} // Limit input to 4 digits
      />
      <button onClick={checkGuess}>Submit</button>

      {message && <p className="message">{message}</p>}

      <div className="attempts">
        <h3>Previous Attempts:</h3>
        {attempts.map((attempt, index) => (
          <p key={index}>
            <strong>{attempt.guess}</strong> → {attempt.feedback}
          </p>
        ))}
      </div>

      {/* Instructions on feedback symbols */}
      <div className="instructions">
        <h3>🔹 How to Decode the Feedback:</h3>
        <p>✔ - Correct digit & correct position</p>
        <p>❓ - Correct digit but wrong position</p>
        <p>❌ - Incorrect digit</p>
      </div>

      {/* Click Here for Clue */}
      <div className="clue-section" style={{ position: "absolute", bottom: "10px", left: "10px" }}>
        <p
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClueClick}
        >
          Click Here
        </p>
      </div>
    </div>
  );
};

export default PasswordCrack;
