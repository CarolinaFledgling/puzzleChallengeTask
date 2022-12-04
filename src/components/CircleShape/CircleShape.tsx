import PropTypes from "prop-types";
import { Card } from "../../types/CardTypes";

type CardCircleShapeProps = {
  card: Card;
};

export function CircleShape({ card }: CardCircleShapeProps) {
  return (
    <span
      style={{
        backgroundColor: `${
          card.isMouseEnter
            ? card.bgColor
            : card.bgColorShape || card.isClick
            ? card.bgColorShape
            : card.bgColor
        }`,
      }}
      className="circle"
    ></span>
  );
}

CircleShape.propTypes = {
  card: PropTypes.object,
};
