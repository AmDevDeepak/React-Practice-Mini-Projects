import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();
  const handleScrollToSectionThird = () => {
    let position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };
  const data = [
    {
      label: "First Section",

      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "red",
      },
    },
    {
      label: "Second Section",

      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "blue",
      },
    },
    {
      label: "Third Section",

      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "green",
      },
    },
    {
      label: "Fourth Section",

      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "violet",
      },
    },
  ];
  return (
    <div>
      <h2>Scroll To a particular section</h2>
      <button onClick={handleScrollToSectionThird}>
        Click to scroll to 3rd Section
      </button>

      {data.map((item, index) => (
        <div ref={index === 2 ? ref : null} key={index} style={item.style}>
          <h4>{item.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
