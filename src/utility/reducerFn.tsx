import { back_color } from "./backColor";
import { cardsData } from "./cardData";

export function reducerFn(latestState: any, actionDispatched: any) {
  console.log("latestState", { latestState });

  if (actionDispatched.type === "CREATE_CARDS") {
    const cardsView: any = cardsData
      //sort method here is basically a shuffled current array
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        const random = Math.floor(Math.random() * back_color.length);
        // console.log("random", random);
        return {
          ...card,
          bgColor: back_color[random].firstColor,
          bgColorShape: back_color[random].opposite,
        };
      });
    console.log("CREATE_CARDS", cardsView);

    return cardsView;
  }

  console.log("not in the dispatch", latestState);
  // throw new Error();
  return latestState;
}
