import { useState } from "react";
import "./style.css";
const Index = (props) => {
  //eslint-disable-next-line
  let starArray = [...Array(props.numberOfStars)];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const clickHandler = (idx) => {
    setRating(idx);
  };

  const mouseEnterHandler = (idx) => {
    setHover(idx);
  };

  const mouseLeaveHandler = () => {
    setHover(rating);
  };
  return (
    <div className="rating-component">
      {starArray.map((_, index) => {
        index += 1;
        return (
          <span
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => clickHandler(index)}
            onMouseEnter={() => mouseEnterHandler(index)}
            onMouseLeave={() => mouseLeaveHandler(index)}
          ></span>
        );
      })}
    </div>
  );
};

export default Index;
