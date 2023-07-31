import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN STACK DEVELOPER",
          "AI-ML ENTHUSIAST",
          "UPCOMING SOFTWARE DEVELOPER"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
