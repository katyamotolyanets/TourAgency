import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {login} from "../../../actions/userActions";
import "../../../App.scss"
import {Link} from "react-router-dom";

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
            <p className="form-header">Log In</p>
            <form method="post"
                  onSubmit={handleSubmit}
                  className="authorization-form"
            >
                <input type="email"
                       name="email"
                       onChange={handleChangeData}
                       placeholder="Email Address"
                />
                <input type="password"
                       name="password"
                       onChange={handleChangeData}
                       placeholder="Password"
                />
                <input type="submit"
                       className="submit-button"
                />
                <p className="form-footer">
                    Doesn't have an account yet? <Link to={{pathname: '/register/'}}>Register</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;