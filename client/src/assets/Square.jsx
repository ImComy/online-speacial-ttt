import React from "react";

function Square({ chooseSquare, val }) {
  let color = "black";

  if (val === "X") {
    color = "green";
  } else if (val === "O") {
    color = "red";
  }

  return (
    <div className="square" onClick={chooseSquare} style={{ color: color, fontSize: "90px" }}>
      {val}
    </div>
  );
}

export default Square;
