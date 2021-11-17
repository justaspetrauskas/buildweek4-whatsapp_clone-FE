import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from "redux-persist-transform-encrypt";
import reducerLib from '../reducers/index.js'
import expireReducer from 'redux-persist-expire'



export const initialState = {
    user: {
        isLogged: false,
        userData: {},
    },
    chat: {
        allChatsRooms: [],
        roomDisplayed: [],
        toggleRequest: false
    }
}

export const groupedReducers = combineReducers({
    user: reducerLib.userReducer,
    chat: reducerLib.chatReducer,
})

const configPersistance = {
    key: 'root',
    storage
}

export const persistedReducer = persistReducer(configPersistance, groupedReducers)

const useThunk = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)) : applyMiddleware(thunk)

const configureStore = createStore(
    persistedReducer,
    initialState,
    useThunk
)

export const persistor = persistStore(configureStore)
export default configureStore