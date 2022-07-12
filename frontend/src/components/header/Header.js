import React, {useEffect, useState} from 'react';

import logo from '../../assets/logo (1).png'
import '../../App.scss'
import {Link} from "react-router-dom";
import Continents from "./Continents";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo-container'>
                <img src={logo}/>
            </div>
            <div className='header-links'>
                <div className='head'>
                    <p className='tours'>Tours</p>
                    <Continents/>
                    <p className='hotels'>Hotels</p>
                    <p className='constructor'>Tour constructor</p>
                </div>

                <p className='authentication'><Link to={{pathname:'/login/'}}>Log in</Link>&nbsp;or&nbsp;<Link to={{pathname:'/register/'}}>Sign up</Link></p>
            </div>
        </div>
    );
};

export default Header;