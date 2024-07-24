import styles from './Dashboard.module.css';
import {Link} from "react-router-dom";

export default function Dashboard() {
    // fetch all expenses based on  selected month and year need both to be true while searching for them

    return(
        <>
            <div className={styles.container}>
                <Link to="/create" className={styles.createButton}>Create New Expense</Link>
                <h1 className={styles.heading}>Dashboard</h1>
            </div>
            <div className={styles.expenses}>
                
            </div>
        </>
    )
}