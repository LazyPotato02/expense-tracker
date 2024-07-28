import styles from './Dashboard.module.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import getAllExpensesForUser from "./expenseApi.js";
import {} from "./CreateExpenses.jsx";
import expenseComponents from "./ExpenseComponent.jsx";
import ExpenseComponent from "./ExpenseComponent.jsx";

export default function Dashboard() {
    // fetch all expenses based on  selected month and year need both to be true while searching for them
    const [expenses, setExpenses] = useState({});

    useEffect( () => {

        (async () => {
            const result = await getAllExpensesForUser('fe7036e717c6260d8478ab584df571f38e19e7c5')
            setExpenses(result)

        })();

    },[])
    console.log(expenses)
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