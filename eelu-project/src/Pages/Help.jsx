import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Help() {
  const navigate = useNavigate();  // Define the navigate function

  return (
    <div> 
      <button className="hero-btn" onClick={() => navigate("/input")}>
        Try It Now →
      </button>
    </div>
  );
}
