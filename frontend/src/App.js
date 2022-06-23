import {Routes} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./components/authorization/login/LoginPage";
import HotelsPage from "./components/hotels/HotelsPage";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {checkAuth, logout} from "./actions/userActions";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('access_token'))
            dispatch(checkAuth())
    }, [])

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="App">
          <Router>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/hotels' element={<HotelsPage/>}/>
                <Route path='/' element={<HotelsPage/>}/>
            </Routes>
          </Router>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default App;
