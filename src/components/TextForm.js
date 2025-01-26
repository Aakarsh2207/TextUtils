import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + Text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleInverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "new text"; // Wrong way
  //   setText("new text"); // Correct Way
  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
          </label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>
          Inverse Text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        {/* <p>Number of words: {text.split(/\s+/).length}</p> */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}
