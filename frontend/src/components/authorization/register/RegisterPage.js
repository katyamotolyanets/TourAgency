import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {register} from "../../../actions/userActions";
import "../../../App.scss"

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChangeData = (e) => {
        setUserData({
            ...userData,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(userData.email, userData.password)
    }

    return (
        <div className="authorization-container">
            <p className="form-header">Sign Up</p>
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
                       placeholder="Enter password"
                />
                <input type="password"
                       name="confirmPassword"
                       onChange={handleChangeData}
                       placeholder="Re-enter password"
                />
                <input type="submit" className="submit-button"/>
                <p className="form-footer">
                    Already have an account? <Link to={{pathname: '/login/'}}>Log in</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;