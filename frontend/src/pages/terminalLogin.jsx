import React, { useState, useEffect } from "react";
import "./TerminalLogin.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const TerminalLogin = ({ onLogin}) => {
  const navigate=useNavigate()
  const [step, setStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [loadingDots, setLoadingDots] = useState("");

  // Typing animation text
  const fullText = `> WELCOME TO BINARY BOUNTY\n\n`
    + `> The AI has gone rogue and taken control of government records...\n`
    + `> Your mission: Reach THE GRID and retrieve THE DISK before time runs out.\n`
    + `> Connecting to secure server...`;

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50); // Adjust speed here
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [textIndex]);

  useEffect(() => {
    if (step === 1) {
      let dots = "";
      const interval = setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        setLoadingDots(dots);
      }, 500);
      setTimeout(() => {
        clearInterval(interval);
        setStep(2);
      }, 3000);
    }
  }, [step]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (name && department && year) {
      localStorage.setItem("userName", name);
      try {
        await addDoc(collection(db, "users"), {
          name,
          department,
          year,
          timestamp: new Date(),
        });
        navigate("/word-sample-t1")
       // onLogin({ name, department, year });
        
      } catch (error) {
        console.error("Error saving user data: ", error);
      }
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {/* Typing animation text */}
        <p dangerouslySetInnerHTML={{ __html: displayedText.replace(/\n/g, "<br/>") }} />
        
        {/* Show "Start" button after typing animation completes */}
        {isTypingComplete && step === 0 && (
          <button className="start-btn" onClick={() => setStep(1)}>Start</button>
        )}

        {/* Connecting dots animation */}
        {step === 1 && <p>{">"} Connecting{loadingDots}</p>}

        {/* Login Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
              <p>{">"} Enter your name:</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus className="blinking-cursor" />
            </div>
            <div className="input-group">
              <p>{">"} Enter your department:</p>
              <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className="blinking-cursor" />
            </div>
            <div className="input-group">
              <p>{">"} Enter your Semester:</p>
              <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className="blinking-cursor" />
            </div>
            <button className="submitBtn" type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TerminalLogin;
 