import { useState } from "react";
import "./style.css";
const RandomColor = () => {
  const [color, setColor] = useState("#fff");
  const randomColor = (length) => {
    return Math.floor(Math.random() * length);
  };
  const generateColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (var i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
    return hexColor;
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: color,
      }}
    >
      <h3 id="h3">Random Color</h3>
      <div className="random-color">
        <button onClick={() => generateColor()}>Generate Random Color</button>
        <h2>COLOR : {color}</h2>
      </div>
    </div>
  );
};

export default RandomColor;
