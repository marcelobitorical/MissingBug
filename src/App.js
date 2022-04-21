import { useState } from "react";
import "./App.css";

function App() {
  const [delta, setDelta] = useState(0);

  const handleTouchMove = (event) => {
    let delta = event.touches[0].clientX;
    setDelta(delta);
  };

  const handleMouseMove = (event) => {
    let delta = event.clientX + 40;
    setDelta(delta);
  };


  return (
    <div
      style={{
        background: "#5f5fc4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #413793"
      }}
    >
      <svg
        width="500"
        height="500"
        onTouchMove={handleTouchMove}
        onMouseMove={handleMouseMove}
        style={{ background: "#283593" }}
      >
        <g>
          <foreignObject x="0" y="0" width="500" height="500">
            <picture>
              <img
                alt=""
                width="100%"
                src="https://i.imgur.com/h1vMJwO.png"
              />
            </picture>
          </foreignObject>
        </g>
      </svg>
        <div style={{ width: delta, background: "#001064", color: "white", fontSize: '1.2rem' }}>
          Another div here with {delta}px.
        </div>
    </div>
  );
}

export default App;
