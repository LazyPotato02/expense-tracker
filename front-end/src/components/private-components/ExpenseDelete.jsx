import {useEffect, useState} from "react";
import {deleteExpenseById, getExpenseById} from "./expenseApi.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from "./ExpenseDetails.module.css";

export default function ExpenseDelete() {
    const [expense, setExpense] = useState({});
    const navigate = useNavigate();
    const {expenseId} = useParams()
    useEffect(() => {
        (async () => {
            const singleExpense = await getExpenseById(expenseId)
            if (singleExpense.response?.status === 404) {
                navigate('/dashboard')
            }
            setExpense(singleExpense)
        })();
    }, []);

    function getMonthName(monthNumber) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[parseInt(monthNumber, 10) - 1];
    }


    function onDelete() {
        deleteExpenseById(expenseId)
        window.location.href = '/dashboard'
        // navigate('/dashboard')
    }

    return (
        <>
            <div className={styles.expenseDetailsWrapper}>

                <p>Delete</p>
                <div>
                    {expense.id ? (
                        <div>
                            <div className={styles.expense}>
                                <h3>{expense.title}</h3>
                                <p>Amount: ${expense.amount}</p>
                                <p>Description: {expense.description}</p>
                                <p>Year: {expense.year}</p>
                                <p>Month: {getMonthName(expense.month)}</p>
                                <Link className={styles.btn} to={`/expenses/details/${expense.id}`}>Cancel</Link>
                                <button className={styles.redBtn} onClick={onDelete}>Delete</button>

                            </div>

                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>

        </>

    )
}