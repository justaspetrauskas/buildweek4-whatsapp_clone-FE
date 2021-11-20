import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducerLib from "../redux/reducers/index.js";
import setInnitialSocketReducer from "./reducers/socket";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  user: {
    isLogged: false,
    userData: {},
  },
  chat: {
    activeChat: {},
    chatId: "",
    history: [],
    newMessage: {},
  },
  socketInfo: {
    socket: {},
  },
};

export const groupedReducers = combineReducers({
  user: reducerLib.userReducer,
  chat: reducerLib.chatReducer,
  socketInfo: setInnitialSocketReducer,
});

const configPersistance = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(
  configPersistance,
  groupedReducers
);

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
export default configureStore;
