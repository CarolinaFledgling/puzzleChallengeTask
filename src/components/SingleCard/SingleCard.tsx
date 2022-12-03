import { CircleShape } from "../CircleShape/CircleShape";
import { SquareShape } from "../SquareShape/SquareShape";
import { TriangleShape } from "../TriangleShape/TriangleShape";

export function SingleCard({ card, dispatch }: any) {
  return (
    <div
      className={card.isClick ? "card big" : "card"}
      onClick={() => dispatch({ type: "CLICK_CARD", id: card.id })}
      onMouseOver={() => dispatch({ type: "MOUSEENTER_CARD", id: card.id })}
      onMouseOut={() => dispatch({ type: "MOUSELEAVE_CARD", id: card.id })}
      style={{
        backgroundColor: `${
          card.isMouseEnter
            ? card.bgColorShape
            : card.bgColor || card.isMouseLeave
            ? card.bgColor
            : card.bgColorShape
        }`,
      }}
    >
      {card.isTriangle ? <TriangleShape card={card} /> : ""}
      {card.isCircle ? <CircleShape card={card} /> : ""}
      {card.isSquare ? <SquareShape card={card} /> : ""}
    </div>
  );
}
