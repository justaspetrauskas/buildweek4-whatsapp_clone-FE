import { initialState } from "../store"

export const userReducer = (state = initialState.user, action) => {

    switch (action.type) {
        case 'SET_LOGGED_IN':
            return {
                ...state,
                isLogged: true
            }

        case 'SET_LOGGED_OUT':
            return {
                ...state,
                isLogged: false
            }

        case 'SET_USER_DATA':
            return {
                ...state,
                userData: {
                    ...action.payload
                }
            }

        case 'SET_BEARER_TOKEN':
            return {
                ...state,
                bearer: action.payload
            }

        case 'SET_ONLINE_USERS':
            return {
                ...state,

                onlineUsers: [...action.payload]

            }

        default:
            {
                return state
            }

    }
}