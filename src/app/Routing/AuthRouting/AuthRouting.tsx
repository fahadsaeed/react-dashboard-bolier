import React, {Suspense, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
const Login = lazy(() => import('../../views/Auth/Login/Login'));
const Signup = lazy(() => import('../../views/Auth/Signup/Signup'));

const AuthRouting = () => (
    <>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/Login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
            <Redirect to="/Login" />
        </Suspense>
    </>
);

export default AuthRouting;
