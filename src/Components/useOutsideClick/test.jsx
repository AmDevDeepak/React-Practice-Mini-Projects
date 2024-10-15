import { useRef, useState } from "react";
import useOutsideClick from "./index";

const useClickOutsideTest = () => {
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      style={{
        width: "500px",
        height: "200px",
        backgroundColor: "blue",
        padding: "10px",
        color: "white",
      }}
    >
      <h2> useClickOutsideTest</h2>
      {showContent ? (
        <div ref={ref}>
          <h2>Oh! I was hidden, right!</h2>
          <p>Please click outside of this to hide me again.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default useClickOutsideTest;
