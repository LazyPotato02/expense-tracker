import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { auth, isCheckingAuth,logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isCheckingAuth && auth === false) {
            navigate('/login');
        }
    }, [isCheckingAuth, auth, navigate]);

    if (isCheckingAuth) {
        return <div>Loading...</div>; // Or a loading spinner
    }

    if (auth === false) {
        return null; // Or a fallback UI
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;