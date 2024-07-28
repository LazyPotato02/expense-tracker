import {useState, useContext} from 'react';
import {AuthContext} from './AuthContext.jsx';
import styles from './Register.module.css'
import {Link} from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const {register} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // check if pass and repass match if not throw error | if match proceed to register
        if (password !== repass) {
            console.log('pass don\'t match')
        }

        await register(username, password);
    };

    return (
        <div className={styles.registerWrapper}>
            <h1 className={styles.registerTitle}>Register</h1>

            <form className={styles.RegisterForm} onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>

                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <label htmlFor="password">Username</label>

                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <label htmlFor="repass">Repeat password</label>

                <input
                    id="repass"
                    type="password"
                    value={repass}
                    onChange={(e) => setRepass(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Register</button>
                <div className={styles.login}>
                    <p className={styles.loginPrompt} >If you already have an account, <Link to={'/login'}>login here</Link>.</p>
                </div>
            </form>
        </div>
    );
};

export default Register;