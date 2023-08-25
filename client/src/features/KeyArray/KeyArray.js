import React, { useState } from "react";

const KeyArray = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (currentIndex < array.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert("Reached the end of the array");
      }
    }
  };

  return (
    <div>
      {array.map((a, i) => (
        <h1
          key={i}
          tabIndex={0}
          onKeyDown={handleKeyPress}
          style={{
            cursor: "pointer",
            fontWeight: i === currentIndex ? "bold" : "normal",
          }}
        >
          {a}
        </h1>
      ))}
    </div>
  );
};

export default KeyArray;
