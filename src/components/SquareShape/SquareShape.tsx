import PropTypes from "prop-types";
import { Card } from "../../types/CardTypes";

type CardSquareShapeProps = {
  card: Card;
};

export function SquareShape({ card }: CardSquareShapeProps) {
  return (
    <span
      style={{
        backgroundColor: ` ${
          card.isMouseEnter
            ? card.bgColor
            : card.bgColorShape || card.isClick
            ? card.bgColorShape
            : card.bgColor
        }`,
      }}
      className="square"
    ></span>
  );
}

SquareShape.propTypes = {
  card: PropTypes.object,
};
