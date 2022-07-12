import {Routes} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";

import {checkAuth, logout} from "./actions/userActions";
import LoginPage from "./components/authorization/login/LoginPage";
import HotelsPage from "./components/hotels/HotelsPage";
import RegisterPage from "./components/authorization/register/RegisterPage";
import Header from "./components/header/Header";
import HotelPage from "./components/hotel/HotelPage";
import TourPage from "./components/tour/TourPage";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('access_token'))
            dispatch(checkAuth())
    }, [])

/*    const handleLogout = () => {
        dispatch(logout())
    }*/

    return (
        <div className="App">
          <Router>
              <Header/>
              <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/hotels' element={<HotelsPage/>}/>
                <Route path='/hotels/:id' element={<HotelPage/>}/>
                <Route path='/tours/:id' element={<TourPage/>}/>
                <Route path='/' element={<HotelsPage/>}/>
            </Routes>
          </Router>
{/*
            <button onClick={handleLogout}>Logout</button>
*/}
        </div>
    );
}

export default App;
