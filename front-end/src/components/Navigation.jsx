// import {useContext, useEffect} from "react";
// import {AuthContext} from "./AuthContext.jsx";
// import {useNavigate} from "react-router-dom";
// import styles from './Navigation.module.css'
//
// export default function Navigation(){
//     const {auth, isCheckingAuth, logout} = useContext(AuthContext);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         if (!isCheckingAuth && auth === false) {
//             navigate('/login');
//         }
//     }, [isCheckingAuth, auth, navigate]);
//
//     if (isCheckingAuth) {
//         return <div>Loading...</div>; // Or a loading spinner
//     }
//
//     if (auth === false) {
//         return null; // Or a fallback UI
//     }
//
//     return (
//         <>
//             <ul className={styles.navBar}>
//                 <li><a href="/" className={styles.navItem}>Home</a></li>
//                 <li ><a href="/dashboard" className={styles.navItem}>Dashboard</a></li>
//
//                 {!auth ? (
//                     <>
//                         <li><a href="/login" className={styles.navItem}>Login</a></li>
//                         <li><a href="/register" className={styles.navItem}>Register</a></li>
//                     </>
//                 ) : (
//                     <li>
//                         <a onClick={logout} className={styles.navItem}>Logout</a>
//                     </li>
//                 )}
//
//             </ul>
//         </>
//     )
// }
//


import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import styles from './Navigation.module.css';

export default function Navigation() {
    const { auth, isCheckingAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isCheckingAuth && auth === false && window.location.pathname !== '/register') {
            navigate('/login');
        }
    }, [isCheckingAuth, auth, navigate]);

    if (isCheckingAuth) {
        return <div>Loading...</div>; // Or a loading spinner
    }

    return (
        <>
            <ul className={styles.navBar}>
                <li><a href="/" className={styles.navItem}>Home</a></li>
                <li><a href="/dashboard" className={styles.navItem}>Dashboard</a></li>

                {!auth ? (
                    <>
                        <li><a href="/login" className={styles.navItem}>Login</a></li>
                        <li><a href="/register" className={styles.navItem}>Register</a></li>
                    </>
                ) : (
                    <li>
                        <a onClick={logout} className={styles.navItem}>Logout</a>
                    </li>
                )}
            </ul>
        </>
    )
}