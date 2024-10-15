import { useState } from "react";
import "./style.css";
import data from "./data.js";
const Index = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  if (data && data.length === 0) {
    return <div>No data found</div>;
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item) => {
          return (
            <div key={item.id} className="item">
              <div onClick={() => handleSingleSelection(item.id)} className="">
                <h3 className="question">{item.question}</h3>
                {selected === item.id ? (
                  <span id="cross">x</span>
                ) : (
                  <span id="plus">+</span>
                )}
              </div>
              {selected === item.id ? (
                <div className="answer">{item.answer}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
