import PropTypes from "prop-types";

type CardSquareShapeProps = {
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
