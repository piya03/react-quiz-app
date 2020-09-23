import React, { useState } from "react";
import "./quiz.css";
import CommonRadioBtn from "./CommonRadioBtn";
import data from "./data";
console.log("data", data[0]);
function Quiz() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="quiz_container">
      <h1>hello quiz</h1>
      <div>
        <p>{data[0]?.question}</p>
        <div className="option_container">
          {data[0].options.map((item, i) => {
            return (
              <CommonRadioBtn
                value="i m value"
                id={item.id}
                htmlfor={item.id}
                labelVal={item.label}
                name="samename"
              />
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          console.log("next");
        }}
        className="btn"
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;

{
  /* <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">one</label>
        </div> */
}
{
  /* name,
  value,
  checked,
  htmlfor,
  labelVal,
  onChange, */
}
