import { useContext, useEffect } from "react";
import { AuthContext } from "../user-management/AuthContext.jsx";
import {useNavigate, useLocation, Link} from "react-router-dom";
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
                <Link className={styles.navItem} to={'/'}>Home</Link>
                <Link className={styles.navItem} to={'/about'}>About</Link>

                {!auth ? (
                    <>
                        <Link className={styles.navItem} to={'/login'}>Login</Link>
                        <Link className={styles.navItem} to={'/register'}>Register</Link>
                    </>
                ) : (
                    <>
                        <Link className={styles.navItem} to={'/dashboard'}>Dashboard</Link>
                        <li>
                            <a onClick={logout} className={styles.navItem}>Logout</a>
                        </li>
                    </>
                )}
            </ul>
        </>
    )
}