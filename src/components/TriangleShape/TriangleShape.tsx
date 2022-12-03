import React from 'react'

export function TriangleShape({ card }: any) {
    return (
      <span
        style={{
          borderBottom: `50px solid ${card.bgColorShape}`,
        }}
        className="triangle"
      ></span>
    );
  }