import { initialState } from "../store";

export const chatReducer = (state = initialState.chat, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        chatId: payload,
      };

    case "SET_HISTORY":
      return {
        ...state,
        history: [...state.history, payload],
      };

    case "NEW_MESSAGE":
      return {
        ...state,
        userData: {
          ...action.payload,
        },
      };

    default: {
      return state;
    }
  }
};
