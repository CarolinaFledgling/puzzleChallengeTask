import { back_color } from "./backColor";
import { cardsData } from "./cardData";
import { shapesData } from "./shapesData";

export function reducerFn(latestState: any, actionDispatched: any) {
  console.log("latestState", { latestState });

  if (actionDispatched.type === "CREATE_CARDS") {
    const cardsView: any = cardsData
      //sort method basically a shuffled current array
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        const random = Math.floor(Math.random() * back_color.length);
        const randomShape = Math.floor(Math.random() * shapesData.length);
        //console.log("randomShape", randomShape);
        return {
          ...card,
          bgColor: back_color[random].firstColor,
          bgColorShape: back_color[random].opposite,
          isTriangle: shapesData[randomShape].isTriangle,
          isSquare: shapesData[randomShape].isSquare,
          isCircle: shapesData[randomShape].isCircle,
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
          bgColor: newCard.bgColor,
          bgColorShape: newCard.bgColorShape,
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
