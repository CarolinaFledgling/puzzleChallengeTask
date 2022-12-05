import { colors } from "./colors";
import { cardsData } from "./cardData";
import { getRandomIndex } from "./getRandomIndex";
import { shapesData } from "./shapesData";
import { CardActions } from "../types/CardActions";
import { CardListState } from "../types/CardListState";

export function reducerFn(
  latestState: CardListState,
  actionDispatched: CardActions
) {
  if (actionDispatched.type === "CREATE_CARDS") {
    const cardsView = cardsData
      //sort method here basically a shuffled current array
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        const random = getRandomIndex(colors);
        const randomShape = getRandomIndex(shapesData);
        return {
          ...card,
          bgColor: colors[random].firstColor,
          bgColorShape: colors[random].opposite,
          isTriangle: shapesData[randomShape].isTriangle,
          isSquare: shapesData[randomShape].isSquare,
          isCircle: shapesData[randomShape].isCircle,
        };
      });

    return { cardList: cardsView, loading: true };
  }

  if (actionDispatched.type === "CLICK_CARD") {
    const newCardsList = latestState.cardList.map((newCard) => {
      const randomShape = getRandomIndex(shapesData);

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
          isTriangle: shapesData[randomShape].isTriangle,
          isSquare: shapesData[randomShape].isSquare,
          isCircle: shapesData[randomShape].isCircle,
        };
      }

      return newCard;
    });

    return { ...latestState, cardList: newCardsList };
  }

  if (actionDispatched.type === "MOUSEENTER_CARD") {
    const newCardsList = latestState.cardList.map((newCard) => {
      if (newCard.id === actionDispatched.id) {
        return {
          ...newCard,
          isMouseEnter: true,
          isMouseLeave: false,
        };
      }

      return newCard;
    });

    return { ...latestState, cardList: newCardsList };
  }

  if (actionDispatched.type === "MOUSELEAVE_CARD") {
    const newCardsList = latestState.cardList.map((newCard) => {
      if (newCard.id === actionDispatched.id) {
        return {
          ...newCard,
          isMouseEnter: false,
          isMouseLeave: true,
        };
      }

      return newCard;
    });

    return { ...latestState, cardList: newCardsList };
  }


  return latestState;
}
