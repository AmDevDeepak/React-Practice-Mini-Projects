import { useState } from "react";
import "./style.css";
import QRCode from "react-qr-code";

const Index = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const generateQRCode = () => {
    setValue(input);
    setInput("");
  };

  return (
    <div className="main">
      <h1>QR Code Generator</h1>
      <input
        onChange={(ev) => setInput(ev.target.value)}
        type="text"
        name="QR-code"
        value={input}
        placeholder="Enter your value"
      />
      <button disabled={input && input.trim() === ""} onClick={generateQRCode}>
        Generate
      </button>
      <div>
        <QRCode id="QR-code-value" value={value} size={300} bgColor="#fff" />
      </div>
    </div>
  );
};

export default Index;
