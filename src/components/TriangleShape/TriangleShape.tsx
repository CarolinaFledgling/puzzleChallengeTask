import PropTypes from "prop-types";

export function TriangleShape({ card }: any) {
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
