import { useEffect, useRef, useState } from "react";
import "./App.css";

const images = [
  "thumb-1.jpg",
  "thumb-2.jpg",
  "thumb-3.jpg",
  "thumb-4.jpg",
  "thumb-5.jpg",
];
function App() {
  const [count, setCount] = useState(0);
  const hoverInterval = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1500)
  }, [count])
  return (
    <div className="App">
      <div className="video">
        <img src={images[0]} />
        <div className="thumb">
          <img src={images[count % images.length]} />
        </div>
      </div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
