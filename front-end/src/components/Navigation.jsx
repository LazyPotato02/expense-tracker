import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './Navigation.module.css';

export default function Navigation() {
    const { auth, isCheckingAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const protectedPath = ['/dashboard', '/logout']

        if (!isCheckingAuth && auth === false && protectedPath.includes(location.pathname)) {
            navigate('/login');
        }
    }, [isCheckingAuth, auth, location, navigate]);

    if (isCheckingAuth) {
        return <div>Loading...</div>; // Or a loading spinner
    }

    return (
        <>
            <ul className={styles.navBar}>
                <li><a href="/" className={styles.navItem}>Home</a></li>
                <li><a href="/about" className={styles.navItem}>About</a></li>

                {!auth ? (
                    <>
                        <li><a href="/login" className={styles.navItem}>Login</a></li>
                        <li><a href="/register" className={styles.navItem}>Register</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="/dashboard" className={styles.navItem}>Dashboard</a></li>

                        <li>
                            <a onClick={logout} className={styles.navItem}>Logout</a>
                        </li>
                    </>
                )}
            </ul>
        </>
    )
}