import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ReverseEngineeringChallenge.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ReverseEngineeringChallenge = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("userName");
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");
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

  const caesarCipher = (input, shift) => {
    return input
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char >= "A" && char <= "Z") {
          let newCharCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
          return String.fromCharCode(newCharCode);
        }
        return char;
      })
      .join("");
  };

  const handleSubmit = () => {
    const correctInput = "TREASURE";
    const generatedOutput = caesarCipher(userInput, 3); // Shift by 3
    setOutput(generatedOutput);

    if (userInput.toUpperCase() === correctInput) {
      setKeyRevealed(true);
    }
  };

  useEffect(() => {
    if (keyRevealed) {
      localStorage.setItem("clueTask4", "N");
      setClueClicked(true);
      alert("✅ Key 'N' stored in local storage!");
      setTimeout(() => {
        navigate("/middle-story");
      }, 3000);
    }
  }, [keyRevealed, navigate]);

  return (
    <div className="reverse-engineering-container">
      <h2 className="title">Reverse Engineering Challenge</h2>
      {validUser ? (
        <>
          <p className="instructions">
            Solve this riddle to find the correct input: "A hidden prize awaits, shift your mind three steps ahead in a path of numbered alphabets. The answer is something valuable."
          </p>
          <p className="hint">Let's see if you can get this: {caesarCipher("TREASURE", 3)}</p>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="input-field"
            placeholder="Enter input here"
          />
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
          <p className="output1">Generated Output: {output}</p>
          {keyRevealed && (
            <div className="key-reveal">
              <p className="success-message">Congratulations! You solved the challenge.</p>
              <p className="key-text">Next Round Key: <strong>{nextRoundKey}</strong></p>
              <p className="redirect-message">Redirecting to the next task...</p>
            </div>
          )}
        </>
      ) : (
        <p className="invalid-user">Invalid user. Please log in with a registered username.</p>
      )}
    </div>
  );
};

export default ReverseEngineeringChallenge;