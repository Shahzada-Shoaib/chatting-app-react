// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    // If user is not authenticated, redirect to login page
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
