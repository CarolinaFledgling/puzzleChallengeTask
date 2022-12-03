

export function CircleShape({ card }: any) {
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
