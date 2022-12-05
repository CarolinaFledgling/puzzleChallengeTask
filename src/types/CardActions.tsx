export type ChangeCardAction = {
  type: "CLICK_CARD" | "MOUSEENTER_CARD" | "MOUSELEAVE_CARD";
  id: number;
};

export type CreateCardAction = {
  type: "CREATE_CARDS";
};

export type CardActions = ChangeCardAction | CreateCardAction;
