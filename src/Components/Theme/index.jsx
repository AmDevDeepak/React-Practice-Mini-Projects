// import { useEffect, useState } from "react";
import "./style.css";
import useLocalStorage from "./useLocalStorage";

const Index = () => {
  const [mode, setMode] = useLocalStorage("mode", "light");
  const handleToggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <div className="main" data-theme={mode}>
      <div className="container">
        <h1>Deepak</h1>
        <button onClick={handleToggleTheme}>Toggle</button>
      </div>
    </div>
  );
};

export default Index;
