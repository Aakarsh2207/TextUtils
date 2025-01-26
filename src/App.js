import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Stark3";
function App() {
  return (
    // <div classNameNameName="blank">Lovely</div>
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
