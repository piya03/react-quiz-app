import React from "react";
import "./quiz.css";

function Quiz() {
  return (
    <div className="quiz_container">
      <h1>hello quiz</h1>
      <p>what is prototype ?</p>
      <div className="option_container">
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">one</label>
        </div>
        <div>
          <input type="radio" id="two" name="gender" value="male" />
          <label for="two">two</label>
        </div>
        <div>
          <input type="radio" id="three" name="gender" value="male" />
          <label for="three">three</label>
        </div>
        <div>
          <input type="radio" id="four" name="gender" value="male" />
          <label for="four">four</label>
        </div>
      </div>
      <button className="btn">Next</button>
    </div>
  );
}

export default Quiz;
