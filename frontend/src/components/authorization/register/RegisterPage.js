import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {register} from "../../../actions/userActions";

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
                <label htmlFor="confirmPassword">Email</label>
                <input type="password"
                       name="confirmPassword"
                       onChange={handleChangeData}
                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default RegisterPage;