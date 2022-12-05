import { CardActions } from "./CardActions";
import { Card } from "./CardTypes";

export type SingleCardProps = {
  card: Card;
  dispatch: React.Dispatch<CardActions>;
};
