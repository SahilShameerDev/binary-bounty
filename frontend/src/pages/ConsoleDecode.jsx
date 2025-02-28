import React, { useEffect, useState } from "react";
var ENCODED_KEY = "dGVjX3Rpc3RfZm9zc18yMF8yXzU=";
import "./console.css";
import { useNavigate } from "react-router-dom";

function ConsoleDecode() {
  useEffect(() => {
    console.log(ENCODED_KEY);
  }, []);

  const handleClueClick = () => {
      localStorage.setItem("clueTask5", "T");
      alert("✅ Key 'T' stored! You can now proceed.");
  };

  const [formData, setFormData] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (formData == "tec_tist_foss_20_2_5") {
      var userinput=prompt("what is the RETTEL TSRIF ? (What You Got Think Reverse)")
      if(userinput=="5"){
        handleClueClick()
        navigate("/pdf-decode-t6");
      }else{
        alert("Nop!!!!!!!!!!!")
      }
    } else {
      alert("worng answer");
    }
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
