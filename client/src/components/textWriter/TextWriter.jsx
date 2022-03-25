import React from "react";
import Typewriter from "typewriter-effect";

const TextWriter = () => {
  const TypewriterData = {
    tw1: "egyedi őrületes weboldalak",
    tw2: "frontend fejlesztés...",
    tw3: "backend fejlesztés...",
    tw4: "a legújabb technológiákkal!",
  };
  return (
    // <div>
    <Typewriter
      options={{
        strings: [TypewriterData.tw1, TypewriterData.tw2, TypewriterData.tw3],
        autoStart: true,
        loop: true,
      }}
    />
    // </div>
  );
};

export default TextWriter;
