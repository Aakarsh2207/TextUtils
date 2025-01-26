import logo from "./logo.svg";
import "./App.css";

let name = "Stark3";
function App() {
  return (
    // <div className="blank">Lovely</div>
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <h1>
          Hello <i>{name}</i>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta natus enim vel cupiditate? Vero, voluptas quam? Facilis corrupti in reprehenderit sit atque tempore tenetur nihil consectetur illum dignissimos a rem fugit ad, nisi explicabo. Dicta excepturi neque sequi nam vitae? Illum sit et temporibus quaerat illo dolorem. Maxime, hic.</p>
      </div>
    </>
  );
}

export default App;
