import {SET_USER, LOGOUT} from '../constants/userConstants'

const defaultState = {
    currentUser: {},
    isAuthorized: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuthorized: true
            }
        case LOGOUT:
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            return {
                ...state,
                currentUser: {},
                isAuthorized: false
            }
        default:
            return state
    }
}

export const setUser = (user) => ({type: SET_USER, payload: user})
export const logoutUser = () => ({type: LOGOUT})