import { useEffect, useReducer } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard/SingleCard";
import { reducerFn } from "./utility/reducerFn";


// here we can add initial values if we want
const initState = {
  cardList: [],
  loading: false,
};

function App() {
  const [{ cardList, loading }, dispatch] = useReducer(reducerFn, initState);

  useEffect(() => {
    dispatch({ type: "CREATE_CARDS" });
  }, []);

  return (
    <>
      {loading ? (
        <section className="card-grid">
          {cardList.map((card) => (
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
