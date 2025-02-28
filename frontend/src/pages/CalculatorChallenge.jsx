import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CalculatorChallenge.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const CalculatorChallenge = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("userName");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [keyRevealed, setKeyRevealed] = useState(false);
  const [nextRoundKey, setNextRoundKey] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [clueClicked, setClueClicked] = useState(false);

  useEffect(() => {
    if (!storedUsername) {
      setValidUser(false);
    } else {
      setValidUser(true);
    }
  }, [storedUsername]);

  useEffect(() => {
    const fetchKey = async () => {
      const keysCollection = await getDocs(collection(db, "keys"));
      if (!keysCollection.empty) {
        setNextRoundKey(keysCollection.docs[0].data().key);
      }
    };
    fetchKey();
  }, []);

  const handleButtonClick = (value) => {
    setError("");
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError("");
  };

  const handleCalculate = () => {
    try {
      if (input.includes("/0")) {
        setKeyRevealed(true);
        setError("Error: Division by zero detected!");
      } else {
        setResult(eval(input));
      }
    } catch (err) {
      setError("Invalid expression");
    }
  };

  useEffect(() => {
    if (keyRevealed) {
      setTimeout(() => {
        navigate("/reverse-challenge-t4");
      }, 2000);
    }
  }, [keyRevealed, navigate]);

  const handleClueClick = () => {
    if (!clueClicked) {
      localStorage.setItem("clueTask3", "N");
      setClueClicked(true);
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="title">Calculator Challenge</h2>
      {validUser ? (
        <>
          <p className="instructions">Find the hidden vulnerability to unlock the next task.</p>
          <div className="calculator-display">{input || "0"}</div>
          {result !== null && <div className="calculator-result">Result: {result}</div>}
          {error && <div className="calculator-error">{error}</div>}
          <div className="calculator-buttons">
            {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "/", "C", "="]
              .map((btn) => (
                <button
                  key={btn}
                  className="calc-button"
                  onClick={() => {
                    if (btn === "C") handleClear();
                    else if (btn === "=") handleCalculate();
                    else handleButtonClick(btn);
                  }}
                >
                  {btn}
                </button>
              ))}
          </div>
          {keyRevealed && (
            <div className="key-reveal">
              <p className="success-message">Congratulations! You've found the vulnerability.</p>
              <p className="key-text">Next Round Key: <strong>{nextRoundKey}</strong></p>
              <p className="redirect-message">Redirecting to the next task...</p>
            </div>
          )}
          <div className="clue-section" style={{ position: "absolute", bottom: "10px", left: "10px" }}>
            <p
              style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
              onClick={handleClueClick}
            >
              Click Here
            </p>
          </div>
        </>
      ) : (
        <p className="invalid-user">Invalid user. Please log in with a registered username.</p>
      )}
    </div>
  );
};

export default CalculatorChallenge;