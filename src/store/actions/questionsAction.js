import { SET_ANSWERD, RESET_ANSWERD } from "./types";

export const setAnswerd = id => ({
  type: SET_ANSWERD,
  payload: id,
});

export const resetAnswerd = () => ({
  type: RESET_ANSWERD,
  payload: []
});
