import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from "./Footer";
import NavLinks from "./NavLinks";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react'
import Contact from './Contact';
import Error from './Error';

function App() {
    const [{ loggedinuser }, dispatch] = useStateValue();
    useEffect(() => {
        const unsubscribe=auth.onAuthStateChanged((userauth) => {
            if (userauth) {
                dispatch({
                    type: 'SET_LOGIN',
                    user: userauth
                })
            } else {
                dispatch({
                    type: 'SET_LOGIN',
                    user: null
                })
            }
        })
    return () => {
        unsubscribe();
    }
}, [])

return (
    <Router>
        <div className="app">
            <Switch>

                <Route exact path='/checkout'>
                    <Header />

                    <Checkout />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/'>
                    <Header />
                    <NavLinks />
                    <Home />
                    <Footer />
                </Route>
                <Route exact path="/Contact" >
                <Contact />
                </Route>
                <Route component={Error}  >
                <Error />
                </Route>
                

            </Switch>
        </div>
    </Router>
);


};
export default App;