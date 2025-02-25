import React, { useState, useEffect } from "react";
import "./TerminalLogin.css";

const TerminalLogin = ({ onLogin }) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && department && year) {
      onLogin({ name, department, year });
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        <p>{">"} WELCOME TO BINARY BOUNTY</p>
        {step === 0 && (
          <>
            <p>{">"} The AI has gone rogue and taken control of government records...</p>
            <p>{">"} Your mission: Reach THE GRID and retrieve THE DISK before time runs out.</p>
            <p>{">"} Connecting to secure server...</p>
            <button className="start-btn" onClick={() => setStep(1)}>Start</button>
          </>
        )}
        {step === 1 && <p>{">"} Connecting{loadingDots}</p>}
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
            <p>{">"} Enter your year:</p>
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className="blinking-cursor" />
          </div>
          <button type="submit">Login</button>
        </form>
        )}
      </div>
    </div>
  );
};

export default TerminalLogin;
