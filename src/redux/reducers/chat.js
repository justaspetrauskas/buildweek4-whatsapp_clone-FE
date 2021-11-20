import { initialState } from "../store";

export const chatReducer = (state = initialState.chat, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        activeChat: payload,
      };

    case "SET_HISTORY":
      return {
        ...state,
        history: payload,
      };
    case "SET_CHAT_ID":
      return {
        ...state,
        chatId: payload,
      };

    case "SET_NEW_MESSAGE":
      return {
        ...state,
        newMessage: payload,
        history: [...state.history, payload],
      };

    default: {
      return state;
    }
  }
};
