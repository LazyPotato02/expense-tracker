import styles from './Dashboard.module.css';
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import getAllExpensesForUser from "./expenseApi.js";
import {} from "./CreateExpenses.jsx";
import ExpenseComponent from "./ExpenseComponent.jsx";
import {AuthContext} from "../user-management/AuthContext.jsx";

export default function Dashboard() {
    // fetch all expenses based on  selected month and year need both to be true while searching for them
    const { auth } = useContext(AuthContext);
    console.log(auth)
    const [expenses, setExpenses] = useState({});
    useEffect( () => {

        (async () => {
            const result = await getAllExpensesForUser()
            setExpenses(result)

        })();

    },[])
    return(
        <>
            <div className={styles.container}>
                <Link to="/create" className={styles.createButton}>Create New Expense</Link>
                <h1 className={styles.heading}>Dashboard</h1>
            </div>
            <div className={styles.expenses}>
                {expenses.length > 0 ? (
                    expenses.map((expense) => (
                        <ExpenseComponent key={expense.id} expense={expense} />
                    ))
                ) : (
                    <p>No expenses available.</p>
                )}
            </div>
        </>
    )
}