import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard/SingleCard";
import { reducerFn } from "./utility/reducerFn";

// here we can add initial values if we want
const initState: any = [];

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
        <section className="card-grid">
          {cardList.map((card: any) => (
            <SingleCard key={card.id} card={card} dispatch={dispatch} />
          ))}
        </section>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}

export default App;
