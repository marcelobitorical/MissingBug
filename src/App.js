import { useState } from "react";
import "./App.css";

function App() {
  const [deltaX, setDeltaX] = useState(0);

  const handleTouchMove = (event) => {
    if (event.touches.length === 2) {
      let delta = (event.touches[0].clientX + event.touches[1].clientX) / 2;
      console.log({
        delta,
      });
      setDeltaX(delta);
    }
  };

  return (
    <div
      style={{
        background: "#5f5fc4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        className="box"
        width="500"
        height="500"
        onTouchMove={handleTouchMove}
        style={{ background: "#283593" }}
      >
        <g>
          <foreignObject x="0" y="0" width="500" height="500">
            <picture>
              <img
                alt=""
                width="100%"
                src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg"
              />
            </picture>
          </foreignObject>
        </g>
      </svg>
      <div>
        <div style={{ width: deltaX, background: "black" }}></div>
      </div>
    </div>
  );
}

export default App;
