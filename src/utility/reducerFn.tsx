import { back_color } from "./backColor";
import { cardsData } from "./cardData";
import { shapesData } from "./shapesData";

export function reducerFn(latestState: any, actionDispatched: any) {
  if (actionDispatched.type === "CREATE_CARDS") {
    const cardsView: any = cardsData
      //sort method basically a shuffled current array
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        const random = Math.floor(Math.random() * back_color.length);
        const randomShape = Math.floor(Math.random() * shapesData.length);
        return {
          ...card,
          bgColor: back_color[random].firstColor,
          bgColorShape: back_color[random].opposite,
          isTriangle: shapesData[randomShape].isTriangle,
          isSquare: shapesData[randomShape].isSquare,
          isCircle: shapesData[randomShape].isCircle,
        };
      });

    return cardsView;
  }

  if (actionDispatched.type === "CLICK_CARD") {
    const newCardsList = latestState.map((newCard: any) => {
      const randomShape = Math.floor(Math.random() * shapesData.length);

      if (newCard.id === actionDispatched.id && newCard.isClick === false) {
        return {
          ...newCard,
          isMouseEnter: false,
          isMouseLeave: false,
          isClick: true,
          bgColor: newCard.bgColor,
          bgColorShape: newCard.bgColorShape,
          isTriangle: shapesData[randomShape].isTriangle,
          isSquare: shapesData[randomShape].isSquare,
          isCircle: shapesData[randomShape].isCircle,
        };
      } else if (
        newCard.id === actionDispatched.id &&
        newCard.isClick === true
      ) {
        return {
          ...newCard,
          isMouseEnter: false,
          isMouseLeave: false,
          isClick: false,
          bgColor: newCard.bgColor,
          bgColorShape: newCard.bgColorShape,
        };
      }

      return newCard;
    });

    return newCardsList;
  }

  if (actionDispatched.type === "MOUSEENTER_CARD") {
    const newCardsList = latestState.map((newCard: any) => {
      if (newCard.id === actionDispatched.id) {
        return {
          ...newCard,
          isMouseEnter: true,
          isMouseLeave: false,
        };
      }

      return newCard;
    });

    return newCardsList;
  }

  if (actionDispatched.type === "MOUSELEAVE_CARD") {
    const newCardsList = latestState.map((newCard: any) => {
      if (newCard.id === actionDispatched.id) {
        return {
          ...newCard,
          isMouseEnter: false,
          isMouseLeave: true,
        };
      }

      return newCard;
    });

    return newCardsList;
  }

  // throw new Error();
  return latestState;
}
