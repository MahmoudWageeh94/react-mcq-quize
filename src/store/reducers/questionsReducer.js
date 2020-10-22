import { SET_ANSWERD, RESET_ANSWERD } from "../actions/types";

const initialState = {
  questions: [
    {
      question: "what is the result of 1 + 5 ?",
      answers: ["7", "9", "6", "3"],
      correct: "6",
      questionId: "1",
      answerd: false,
    },
    {
      question: "what is the result of 1 * 5 ?",
      answers: ["6", "5", "2", "1"],
      correct: "5",
      questionId: "2",
      answerd: false,
    },
    {
      question: "what is the result of 7 * 9 ?",
      answers: ["55", "28", "63", "79"],
      correct: "63",
      questionId: "3",
      answerd: false,
    },
    {
      question: "what is the result of 11 * 11 ?",
      answers: ["144", "122", "121", "130"],
      correct: "121",
      questionId: "4",
      answerd: false,
    },
    {
      question: "what is the result of 11 * 9 ?",
      answers: ["101", "109", "99", "89"],
      correct: "99",
      questionId: "5",
      answerd: false,
    },
  ],
};
const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERD:
      return {
        ...state,
        questions: state.questions.map(question => question.questionId === action.payload
          ? { ...question, answerd: true }
          : question
        )
      }
    case RESET_ANSWERD:
      return {
        ...state,
        questions: state.questions.map(question => ({ ...question, answerd: false }))
      }
    default:
      return state;
  }
};

export default questionsReducer;
