import React, {Suspense, lazy} from "react";
import { Route, Switch } from "react-router-dom";
const Dashboard = lazy(() => import('../../views/Dashboard/Dashboard'));

const AuthRouting = () => (
    <>
        <Suspense fallback={<div>Dashboard Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
            </Switch>
        </Suspense>
    </>
);

export default AuthRouting;
