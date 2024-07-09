import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // check if pass and repass match if not throw error | if match proceed to register
        await register(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="password"
                value={repass}
                onChange={(e) => setRepass(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;