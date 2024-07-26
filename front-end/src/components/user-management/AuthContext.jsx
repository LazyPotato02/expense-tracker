import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [userId , setUserId] = useState(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {

        const verifyAuth = async () => {
            try {
                const response = await axios.get('/api/auth/verify/');
                setAuth({ status: 'authenticated' });
                const id = await axios.get('/api/auth/user-id/');
                setUserId(id)
            } catch (error) {
                setAuth(false);
            } finally {
                setIsCheckingAuth(false);
            }
        };

        verifyAuth();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/auth/login/', { username, password });
            setAuth({ status: 'authenticated' });
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const register = async (username, password) => {
        try {
            const response = await axios.post('/api/auth/register/', { username, password });
            setAuth({ status: 'authenticated' });
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout/');
            setAuth(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, isCheckingAuth,login, register, logout,userId }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };