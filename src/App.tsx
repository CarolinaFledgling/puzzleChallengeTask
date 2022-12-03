import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { reducerFn } from "./utility/reducerFn";

// here we can add initial values if we want
const initState: any= [];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cardList, dispatch] = useReducer(reducerFn, initState);

  useEffect(() => {
    dispatch({ type: "CREATE_CARDS" });
    setIsLoading(true);
  }, []);

  console.log("cardList", { cardList });
  return (
    <>
      {isLoading ? (
        <div className="card-grid">
          {cardList.map((card: any) => (
            <div
              className={card.isClick ? "card big" : "card"}
              onClick={() => dispatch({ type: 'CLICK_CARD', id: card.id })}
              style={{
                backgroundColor: `${card.bgColor}`,
              }}
              key={card.id}
            >
              {card.isTriangle ? (
                <span
                  style={{
                    borderBottom: `50px solid ${card.bgColorShape}`,
                  }}
                  className="triangle"
                ></span>
              ) : (
                ""
              )}
              {card.isCircle ? (
                <span
                  style={{
                    backgroundColor: `${card.bgColorShape}`,
                  }}
                  className="circle"
                ></span>
              ) : (
                ""
              )}
              {card.isSquare ? (
                <span
                  style={{
                    backgroundColor: ` ${card.bgColorShape}`,
                  }}
                  className="square"
                ></span>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}

export default App;
