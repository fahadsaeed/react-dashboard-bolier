import React from "react";
import AuthRouting from "./AuthRouting/AuthRouting";
import AdminRouting from "./AdminRouting/AdminRouting";


const isLogin = false;
const Routing = () => (
    isLogin ? <AdminRouting/> : <AuthRouting/>
);

export default Routing;
