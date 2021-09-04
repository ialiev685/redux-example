import * as actionType from "./counter-type";

export const increment = (value) => {
  return { type: actionType.INCREMENT, payload: value };
};

export const decrement = (value) => {
  return { type: actionType.DECREMENT, payload: value };
};
