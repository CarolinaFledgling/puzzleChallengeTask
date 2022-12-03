import React from 'react'

export function CircleShape({ card }: any) {
  return (
    <span
      style={{
        backgroundColor: `${card.bgColorShape}`,
      }}
      className="circle"
    ></span>
  );
}