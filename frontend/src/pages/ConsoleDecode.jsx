import React, { useEffect, useState } from "react";
var ENCODED_KEY = "WkVkV2FsZ3pVbkJqTTFKbVdtMDVlbU14T0hsTlJqaDVXSHBWUFE9PQ==";
import "./console.css";

function ConsoleDecode() {

  useEffect(() => {
    console.log(ENCODED_KEY);
  }, []);

  const [formData, setFormData] = useState("");

  const handleSubmit = () => {
    alert("You can go to next task");
  };

  return (
    <div className="task2-container">
      <div className="left-container">
        <p className="log">എന്റെ ടേർമിനൽ എവിടെ?</p>
        <h1>
          <i className="fas fa-paw"></i> TASK 2
        </h1>
        <div className="jsdev">
          <img
            src="https://cdn.thenewstack.io/media/2018/08/f6d29249-brendan-eich.jpg"
            alt="jsdev"
          />
        </div>
      </div>
      <div className="right-container">
        <header>
          <h1>എല്ലാം വെബ്സൈറ്റിൽ ഉണ്ട്, കേട്ടോ!</h1>
          <h1>
            TechFoss, the grand tech fest of TOCH Institute, was packed with
            innovators and tech enthusiasts. Among them, Bob noticed a peculiar
            code hidden behind Something. Curious, he scanned it.........
          </h1>
        </header>

        <div className="input-container">
          <input
            type="text"
            name="petName"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Place whatever You Got"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ConsoleDecode;