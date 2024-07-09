import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';
import { useContext } from 'react';

const ProtectedRoute = ({ children }) => {
    const { auth, isCheckingAuth } = useContext(AuthContext);

    if (isCheckingAuth) {
        return <div>Loading...</div>;
    }

    return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;