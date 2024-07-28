import {useContext, useState} from "react";
import {AuthContext} from "../user-management/AuthContext.jsx";
import axios from "axios";
import styles from "./CreateExpenses.module.css";
import {useNavigate} from "react-router-dom";

export function ExpenseCreate() {
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formValues, setFormValues] = useState({
        creator: userId,
        title: '',
        amount: '',
        description: '',
        year: '2024',
        month: '01',
    })


    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (formValues.title === '' || formValues.amount === '' || formValues.description === ''){
                setError('All values are required')
                return
            }

            const response = await axios.post('http://localhost:8000/api/auth/expenses/', formValues);
            navigate('/dashboard')
        } catch (error) {
            // console.log('Error submitting form:', error);
            setError('Amount must be lower than 10 numbers');
        }
    };

    const changeHandler = (e) => {
        const {name, value} = e.target;

        // Additional validation for year
        if (name === 'year') {
            if (value.length > 4) return; // Prevent more than 4 digits
            if (parseInt(value) < 0) return; // Prevent negative numbers
        }

        setFormValues(oldValues => ({
            ...oldValues,
            [name]: value,
        }));
    };
    return (
        <>
            <div className={styles.formWrapper}>
                <h1>Create Expense</h1>
                <form className={styles.form} onSubmit={formSubmitHandler}>
                    {error && (
                        <p className={styles.error}>
                            <span>{error}</span>
                        </p>
                    )}
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            style={{'width': '120px'}}
                            type="text"
                            name="title"
                            id="title"
                            maxLength={30}
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
                        <input className={styles.submitBtn} type="submit" value="Create"/>
                    </div>
                </form>
            </div>

        </>
    )

}