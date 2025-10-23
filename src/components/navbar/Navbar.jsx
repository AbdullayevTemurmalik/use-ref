import React, { useState } from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/dataSlice";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      dispatch(setData(inputValue));
      setInputValue("");
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <h2>Navbar</h2>
      </div>
      <div className="main-header">
        <input
          type="text"
          placeholder="Ma'lumot kiriting..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSend}>Yuborish</button>
      </div>
    </header>
  );
};

export default Navbar;
