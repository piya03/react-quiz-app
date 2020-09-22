import React from "react";
import "./quiz.css";
import CommonRadioBtn from "./CommonRadioBtn";
import data from "./data";
function Quiz() {
  return (
    <div className="quiz_container">
      <h1>hello quiz</h1>
      {data.map((each, index) => {
        console.log(each, "eacheacheach");
        return (
          <div>
            <p>{each?.question}</p>
            <div className="option_container">
              {each?.options.map((items) => {
                console.log("Quiz -> items", items);
                return (
                  <CommonRadioBtn
                    value="i m value"
                    id={items.id}
                    htmlfor={items.id}
                    labelVal={items.label}
                    name="samename"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {/* <div className="option_container">
        <CommonRadioBtn
          value="i m value"
          id="id2"
          htmlfor="id2"
          labelVal="Label second"
          name="samename"
        />
        <CommonRadioBtn
          value="i m value"
          id="id3"
          htmlfor="id3"
          labelVal="Label third"
          name="samename"
        />
        <CommonRadioBtn
          value="i m value"
          id="id4"
          htmlfor="id4"
          labelVal="Label four"
          name="samename"
        />
      </div> */}
      <button className="btn">Next</button>
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
