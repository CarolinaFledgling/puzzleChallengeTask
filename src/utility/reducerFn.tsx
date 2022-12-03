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

  if (actionDispatched.type === "CLICK_CARD") {
    
    const newCardsList = latestState.map((newCard: any) => {
      if (newCard.id === actionDispatched.id) {
        return {
          ...newCard,
          isMouseEnter: false,
          isMouseLeave: false,
          isClick: !newCard.isClick,
          bgColor: actionDispatched.bgColor,
          bgColorShape: actionDispatched.bgColorShape,
        };
      }

      return newCard;
    });
    console.log(newCardsList, "newCardsList");
    return newCardsList;
    
  }
  console.log("not in the dispatch", latestState);
  // throw new Error();
  return latestState;
}
