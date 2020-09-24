import React, { useState } from "react";
import "./quiz.css";
import CommonRadioBtn from "./CommonRadioBtn";
import data from "./data";
console.log("data", data.length);
function Quiz() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [one, setOne] = useState("");
  console.log("Quiz -> ans", one);

  function next() {
    if (activeIndex < data.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      setActiveIndex(0);
    }
  }
  return (
    <div className="quiz_container">
      <h1>hello quiz</h1>
      <div>
        <p>{data[activeIndex]?.question}</p>
        <div className="option_container">
          {data[activeIndex].options.map((item, i) => {
            return (
              <CommonRadioBtn
                value={item.id}
                id={item.id}
                htmlfor={item.id}
                labelVal={item.label}
                checked={one === item.id ? true : false}
                onChange={(e) => {
                  console.log("Quiz -> e", e.target.value);
                  setOne(e.target.value);
                }}
                name="samename"
              />
            );
          })}
        </div>
      </div>
      <button onClick={next} className="btn">
        Next
      </button>
    </div>
  );
}

export default Quiz;

// checked={radioVal === "firstVal" ? true : false}
// name="test"
// value="firstVal"
// onChange={(e) => {
//   setRadioVal(e.target.value);
// }}
//4 < 4;
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
