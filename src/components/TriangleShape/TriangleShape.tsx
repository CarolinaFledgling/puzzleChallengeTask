import PropTypes from "prop-types";
import { Card } from "../../types/CardTypes";

type CardTriangleShapeProps = {
  card: Card;
};

export function TriangleShape({ card }: CardTriangleShapeProps) {
  return (
    <span
      style={{
        borderBottom: `50px solid ${
          card.isMouseEnter
            ? card.bgColor
            : card.bgColorShape || card.isClick
            ? card.bgColorShape
            : card.bgColor
        }`,
      }}
      className="triangle"
    ></span>
  );
}

TriangleShape.propTypes = {
  card: PropTypes.object,
};
