import {useState, useContext} from 'react';
import {AuthContext} from './AuthContext.jsx';
import styles from './Login.module.css'
import {Link} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(username, password);
        if (response?.response.status === 400){
            setError('Wrong username or password');
        }
    };

    return (
        <>
            <div className={styles.loginWrapper}>

                <h1 className={styles.loginTitle}>Login</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    {error && (
                        <p className={styles.error}>
                            <span>{error}</span>
                        </p>
                    )}
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <button type="submit">Login</button>
                    <div className={styles.register}>
                        <p>Don't have an account?</p>
                        <p>Join us now and start managing your expenses easily! <Link to={'/register'}>Register
                            here</Link></p>
                    </div>
                </form>
            </div>

        </>

    );
};

export default Login;