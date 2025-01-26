import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + Text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  //   text = "new text"; // Wrong way
  //   setText("new text"); // Correct Way
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        {/* <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
