import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { auth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        if (auth !== null) {
            setIsCheckingAuth(false);
        }
    }, [auth]);

    useEffect(() => {
        if (!isCheckingAuth && !auth) {
            navigate('/login');
        }
    }, [isCheckingAuth, auth, navigate]);

    if (isCheckingAuth) {
        return <div>Loading...</div>; // Or a loading spinner
    }

    if (!auth) {
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