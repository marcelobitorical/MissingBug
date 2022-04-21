import { useState } from "react";
import "./App.css";

function App() {
  const [isMouseHolding, setIsMouseHolding] = useState(false);
  const [deltaX, setDeltaX] = useState(0);

  const handleTouchStart = (event) => {
    setIsMouseHolding(true);
  };

  const handleTouchEnd = (event) => {
    setIsMouseHolding(false);
  }

  const handleTouchMove = (event) => {
    if (event.touches.length === 2) {
      let delta_0 = (event.touches[0].clientX + event.touches[1].clientX ) / 2; 
      console.log({
        delta_0
      });
      setDeltaX(delta_0);
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
        <div style={{ width: deltaX, background: 'blue' }}></div>
      </div>
    </div>
  );
}

export default App;
