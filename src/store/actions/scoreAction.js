import { SET_SCORE, RESET_SCORE } from "./types";

export const setScore = score => ({
  type: SET_SCORE,
  payload: score,
});
export const resetScore = () => ({
  type: RESET_SCORE,
  payload: 0
});

