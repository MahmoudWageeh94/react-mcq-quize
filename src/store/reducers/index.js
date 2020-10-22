import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import scoreReducer from "./scoreReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  questions: questionsReducer,
  score: scoreReducer,
  user: userReducer
});

export default rootReducer;
