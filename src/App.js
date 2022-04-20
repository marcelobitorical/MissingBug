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
      // console.log({
      //   "0x": event.touches[0].clientX,
      //   "0y": event.touches[0].clientY,
      //   "1y": event.touches[1].clientY,
      //   "2y": event.touches[1].clientY,
      // });
      console.log({
        delta_0
      });
      setDeltaX(delta_0);
    }
  };

  return (
    <div
      style={{
        background: "skyblue",
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
