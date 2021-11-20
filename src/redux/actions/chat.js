import { io } from "socket.io-client";

const setInitSoketStore = (payload) => ({
  type: "INIT_SOCKET",
  payload: payload,
});

// updates the current active chat in the main chat component, which
// supposedly has a React.useEffect listening to this change and reacting accordingly.
export const setActiveChat = (payload) => ({
  type: "SET_ACTIVE_CHAT",
  payload: payload,
});

export const setNewMessage = (payload) => ({
  type: "SET_NEW_MESSAGE",
  payload: payload,
});

// sets the history for the requested chatId with the history in the payload.
// To be used when retrieving the history for a chat.
const setHistory = (payload) => ({
  type: "SET_HISTORY",
  payload: payload,
});

const setChatId = (chatId) => ({
  type: "SET_CHAT_ID",
  payload: chatId,
});

export const setChatHistory = (chatId, history) => {
  return (dispatch) => {
    dispatch(setChatId(chatId));
    dispatch(setHistory(history));
  };
};

// gets fired when the main app is rendering for the first time after login:
// initializes a socket.io client and stores it in the store
export const setInitSocket = () => {
  return (dispatch) => {
    let token = "Bearer " + window.localStorage.getItem("user_Token");
    const ADDRESS = process.env.REACT_APP_API_BE;
    const socket = io(ADDRESS, {
      transports: ["websocket"],
      query: {
        authorization: token.split(" ")[1],
      },
    });
    dispatch(setInitSoketStore(socket));
  };
};
