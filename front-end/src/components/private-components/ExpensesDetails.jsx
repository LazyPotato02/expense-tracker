import {Link, useNavigate, useParams} from "react-router-dom";
import {getExpenseById} from "./expenseApi.js";
import {useEffect, useState} from "react";
import styles from "./ExpenseDetails.module.css";
import styles2 from "./ExpenseComponent.module.css"

export default function ExpenseDetails() {
    const [expense, setExpense] = useState({});
    const {expenseId} = useParams()
    const navigate = useNavigate();

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


    return (
        <>
            <div className={styles.expenseDetailsWrapper}>

                <p>Details</p>
                <div>
                    {expense.id ? (
                        <div>
                            <div className={styles.expense}>
                                <h3>{expense.title}</h3>
                                <p>Amount: ${expense.amount}</p>
                                <p>Description: {expense.description}</p>
                                <p>Year: {expense.year}</p>
                                <p>Month: {getMonthName(expense.month)}</p>
                                <Link to={`/expenses/edit/${expense.id}`}>Edit</Link>
                                <button>Delete</button>
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