import PropTypes from "prop-types";

export function SquareShape({ card }: any) {
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