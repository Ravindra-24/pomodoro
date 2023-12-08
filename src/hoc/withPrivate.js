
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withPrivate = (Component) => {
    const AuthRoute = (props) => {
        const auth = useSelector(state => state.authReducer);
        return auth?.uid ? <Component {...props} /> : <Navigate to="/login" />;
    }
    return AuthRoute;
}

export default withPrivate;
