import React from "react";

export function SquareShape({ card }: any) {
  return (
    <span
      style={{
        backgroundColor: ` ${card.bgColorShape}`,
      }}
      className="square"
    ></span>
  );
}
