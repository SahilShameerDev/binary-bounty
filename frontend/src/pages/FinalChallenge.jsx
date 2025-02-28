import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FinalChallenge.css";

const FinalChallenge = () => {
  const navigate = useNavigate();
  const [canProceed, setCanProceed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const clue1 = localStorage.getItem("clueTask1");
    const clue2 = localStorage.getItem("clueTask2");
    const clue3 = localStorage.getItem("clueTask3");
    const clue4 = localStorage.getItem("clueTask4");
    const clue5 = localStorage.getItem("clueTask5");
    const clue6 = localStorage.getItem("clueTask6");
    console.log("NIW")
    if (clue1 === "B" && clue2 === "O" && clue3 == "U" && clue4=="N" && clue5=="T" && clue6=="Y") {
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
          <p>Last word is split in the page.. scan and find...</p>
<span style={{ position: "absolute", top: "10px", left: "10px", color: "black", fontSize: "20px", fontWeight: "bold" }}>
        first character : G
      </span>
      <span style={{ position: "absolute", top: "10px", right: "10px", color: "black", fontSize: "20px", fontWeight: "bold" }}>
        second character : O
      </span>
      <span style={{ position: "absolute", bottom: "10px", left: "10px", color: "black", fontSize: "20px", fontWeight: "bold" }}>
        third character : T
      </span>
      <span style={{ position: "absolute", bottom: "10px", right: "10px", color: "black", fontSize: "20px", fontWeight: "bold" }}>
        last word in the console
      </span>
          <p><strong>What is the final word?</strong></p>
          <input type="text" placeholder="Enter final word" id="finalWordInput" />
          <button onClick={() => {
            const userAnswer = document.getElementById("finalWordInput").value;
            if (userAnswer.toLowerCase() === "bountygotwin") {
              alert("🎉 Congratulations! You've completed the challenge!");
              navigate("/completed-bin-bounty-2k25-winner");
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
