import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FinalChallenge.css";

const FinalChallenge = () => {
  const navigate = useNavigate();
  const [canProceed, setCanProceed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const clue2 = localStorage.getItem("clueTask2");
    const clue3 = localStorage.getItem("clueTask3");

    if (clue2 === "Bounty" && clue3 === "N") {
      setCanProceed(true);
    } else {
      setCanProceed(false);
      setErrorMessage("You need to collect all clues first! Please complete previous tasks.");
    }
  }, []);

  return (
    <div className="final-challenge-container">
      <h2>Final Challenge</h2>
      {canProceed ? (
        <div className="challenge-content">
          <p>Congratulations! You've collected all clues. Solve this final puzzle to complete the challenge.</p>
          <p><strong>What is the final word?</strong></p>
          <input type="text" placeholder="Enter final word" id="finalWordInput" />
          <button onClick={() => {
            const userAnswer = document.getElementById("finalWordInput").value;
            if (userAnswer.toLowerCase() === "bounty") {
              alert("🎉 Congratulations! You've completed the challenge!");
              navigate("/completion");
            } else {
              alert("Incorrect answer! Try again.");
            }
          }}>
            Submit
          </button>
        </div>
      ) : (
        <div className="error-message">
          <p>{errorMessage}</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default FinalChallenge;
