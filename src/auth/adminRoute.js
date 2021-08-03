import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticate } from '../auth';


export const AdminRoute = ({children}) => {
    return (
        <Route
        render = {() => {
            return isAuthenticate() && isAuthenticate().sub == 1 ? (
                children
            ) : (
                <Redirect to={{pathname: "/signin"}}/>
            );
        }}
        />
    );
};

export default AdminRoute;
