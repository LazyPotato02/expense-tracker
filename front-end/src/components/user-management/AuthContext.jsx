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
            const token = localStorage.getItem('auth_token');

            if (token) {
                try {
                    // Optionally, you can set the token in the headers for all requests
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                    const response = await axios.get('/api/auth/verify/');
                    setAuth({ status: 'authenticated', 'auth_token': token });

                    const idResponse = await axios.get('/api/auth/user-id/');
                    setUserId(idResponse.data.id);
                } catch (error) {
                    setAuth(false);
                } finally {
                    setIsCheckingAuth(false);
                }
            } else {
                setAuth(false);
                setIsCheckingAuth(false);
            }
        };

        verifyAuth();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/auth/login/', { username, password });
            const token = response.data['token'];
            localStorage.setItem('auth_token', token);
            setAuth({ status: 'authenticated', 'auth_token': token });

            navigate('/');
        } catch (error) {
            return error;
        }
    };

    const register = async (username, password) => {
        try {
            const response = await axios.post('/api/auth/register/', { username, password });
            const token = response.data['token'];
            localStorage.setItem('auth_token', token);
            setAuth({ status: 'authenticated', 'auth_token': token });

            navigate('/');
        } catch (error) {
            return error;
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout/');
            localStorage.removeItem('auth_token');
            setAuth(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, isCheckingAuth, login, register, logout, userId }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
