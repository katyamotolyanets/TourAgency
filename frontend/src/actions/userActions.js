import axios from "axios";
import {logoutUser, setUser} from "../reducers/userReducer";

export const register = (email, password) => {
    try {
        const userData = {
            email: email,
            password: password
        };
        axios.post("http://localhost:8000/api/users/", userData)
            .then(response => {
                console.log(response.status)
            })
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const userData = {
                email: email,
                password: password
            };
            const response = await axios
                .post('http://localhost:8000/login/', userData)
            dispatch(setUser(response.data.id))
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('user', response.data.id);
        } catch (error) {
            console.log(error)
        }
    }
}


export const checkAuth = () => {
    return async dispatch => {
        try {
            const isTokenValid = verifyToken()
            if (!isTokenValid) {
                localStorage.removeItem('access_token')
                const requestData = {
                    refresh: localStorage.getItem('refresh_token')
                }
                await axios.post('http://localhost:8000/refresh-token/', requestData)
                    .then(response => {
                        dispatch(setUser(localStorage.getItem('user')))
                        localStorage.setItem('access_token', response.data.access)
                    })
                    .catch(dispatch(logoutUser()))
            } else {
                dispatch(setUser(localStorage.getItem('user')))
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

const verifyToken = async () => {
    const accessToken = localStorage.getItem('access_token')
    const requestData = {
        token: accessToken
    }
    await axios.post('http://localhost:8000/token-verify/', requestData)
        .then(response => {
            if (response.status === 401) {
                return false
            }
            else if (response.status === 200) {
                return true
            }
        })
}

export const logout = () => {
    return async dispatch => {
        dispatch(logoutUser())
    }
}
