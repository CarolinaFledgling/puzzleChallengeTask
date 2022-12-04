import PropTypes from "prop-types";

type CardCircleShapeProps = {
  card: {
    id: number;
    bgColor: string;
    bgColorShape: string;
    isCircle: boolean;
    isSquare: boolean;
    isClick: boolean;
    isTriangle: boolean;
    isMouseEnter: boolean;
    isMouseLeave: boolean;
  };
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
