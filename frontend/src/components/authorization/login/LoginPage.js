import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../actions/userActions";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleChangeData = (e) => {
        setUserData({
            ...userData,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(userData.email, userData.password))
    }

    return (
        <div className="authorization-container">
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" 
                       name="email"
                       onChange={handleChangeData}
                />
                <label htmlFor="password">Password</label>
                <input type="password" 
                       name="password"
                       onChange={handleChangeData}
                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default LoginPage;