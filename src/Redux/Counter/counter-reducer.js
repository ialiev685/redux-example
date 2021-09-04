import * as actionType from "./counter-type.js";

const initialValue = {
  value: 10,
};

export const valueReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return { value: state.value + action.payload };
    case actionType.DECREMENT:
      return { value: state.value - action.payload };
    default:
      return state;
  }
};
