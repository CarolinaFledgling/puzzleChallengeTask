import React from "react";
import { CircleShape } from "../CircleShape/CircleShape";
import { SquareShape } from "../SquareShape/SquareShape";
import { TriangleShape } from "../TriangleShape/TriangleShape";

export function SingleCard({ card, dispatch }: any) {
  return (
    <div
      className={card.isClick ? "card big" : "card"}
      onClick={() => dispatch({ type: "CLICK_CARD", id: card.id })}
      style={{
        backgroundColor: `${card.bgColor}`,
      }}
      key={card.id}
    >
      {card.isTriangle ? <TriangleShape card={card} /> : ""}
      {card.isCircle ? <CircleShape card={card} /> : ""}
      {card.isSquare ? <SquareShape card={card} /> : ""}
    </div>
  );
}
