import {useNavigate, useParams} from "react-router-dom";
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

    return (
        <>
            {expense.id ? (
                <div className={styles.expenseDetailsWrapper}>
                    <div className={styles2.expense}>
                        <h3>{expense.title}</h3>
                        <p>Amount: ${expense.amount}</p>
                        <p>Description: {expense.description}</p>
                        <p>Month: {expense.month}</p>
                        <p>Year: {expense.year}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>

                </div>
            ) : (
                <div></div>
            )}
        </>
    // <div className={styles.expenseDetailsWrapper}>
    //     <div className={styles2.expense}>
    //         <h3>{expense.title}</h3>
    //         <p>Amount: ${expense.amount}</p>
    //         <p>Description: {expense.description}</p>
    //         <p>Month: {expense.month}</p>
    //         <p>Year: {expense.year}</p>
    //         <button>Edit</button>
    //         <button>Delete</button>
    //     </div>
    //
    //     </div>

    )

}