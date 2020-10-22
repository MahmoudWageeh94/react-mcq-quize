import { SET_SCORE, RESET_SCORE } from "../actions/types";

const initialState = {
  score: 0,
};
const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case RESET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default scoreReducer;
