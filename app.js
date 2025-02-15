import React, { useState } from "react";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  const [rollNumber, setRollNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rollNumber.trim() !== "") setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="login-page">
          <h1>Image Gallery</h1>
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
          <button onClick={handleSubmit}>View Gallery</button>
        </div>
      ) : (
        <Gallery rollNumber={rollNumber} />
      )}
    </div>
  );
}

export default App;
