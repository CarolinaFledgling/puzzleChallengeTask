import PropTypes from "prop-types";

type CardTriangleShapeProps = {
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
