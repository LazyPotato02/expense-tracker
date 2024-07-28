import styles from "./CreateExpenses.module.css";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../user-management/AuthContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {getExpenseById} from "./expenseApi.js";

export default function ExpenseEdit() {
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();
    const {expenseId} = useParams()
    const [formValues, setFormValues] = useState({
        title: '',
        amount: '',
        description: '',
        year: '',
        month: '01',
    })
    useEffect(() => {
        (async () => {
            const singleExpense = await getExpenseById(expenseId)
            if (singleExpense.response?.status === 404) {
                navigate('/dashboard')
            }
            setFormValues(singleExpense)
        })();
    }, []);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/auth/expenses/${expenseId}/`, formValues);
            navigate('/dashboard')
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const changeHandler = (e) => {
        const {name, value} = e.target;


        if (name === 'year') {
            if (value.length > 4) return;
            if (parseInt(value) < 0) return;
        }

        setFormValues(oldValues => ({
            ...oldValues,
            [name]: value,
        }));
    };


    return (
        <>
            <div className={styles.formWrapper}>
                <h1>Edit Expense</h1>
                <form className={styles.form} onSubmit={formSubmitHandler}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            style={{'width': '120px'}}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Bills"
                            value={formValues.title}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder="20"
                            maxLength='4'
                            value={formValues.amount}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="A description for the expense"
                            value={formValues.description}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="year">Year</label>
                        <select
                            name="year"
                            id="year"
                            value={formValues.year}
                            onChange={changeHandler}
                        >
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                        </select>
                    </div>

                    <div>
                    <label htmlFor="month">Month</label>
                        <select
                            name="month"
                            id="month"
                            value={formValues.month}
                            onChange={changeHandler}
                        >
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>

                        </select>
                    </div>

                    <div>
                        <input className={styles.submitBtn} type="submit" value="Submit"/>
                    </div>
                </form>
            </div>

        </>
    )

}