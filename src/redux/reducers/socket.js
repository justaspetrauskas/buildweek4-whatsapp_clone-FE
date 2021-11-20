import { initialState } from "../store";

const setInnitialSocketReducer = (state = initialState.socketInfo, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_SOCKET":
      return {
        socket: payload,
      };
    default:
      return state;
  }
};

export default setInnitialSocketReducer;
