import { useEffect } from "react";
import { useState } from "react";

const useWindowResize = () => {
  const [windowSize, stWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const handleWindowResize = () => {
    stWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};

export default useWindowResize;
