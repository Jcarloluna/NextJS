import React from "react";

function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("/Images/JammBg.png")`,
          height: `100vh`,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100"></div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
