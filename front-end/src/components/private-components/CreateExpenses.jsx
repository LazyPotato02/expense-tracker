import {useContext, useState} from "react";
import {AuthContext} from "../user-management/AuthContext.jsx";
import axios from "axios";
import styles from "./CreateExpenses.module.css";
export function CreateExpenses() {
    const {userId}= useContext(AuthContext);
    const [formValues, setFormValues] = useState({
        creator:userId?.data.id,
        title:'',
        amount: '',
        description: '',
        year: '',
        month: '01',
    })


    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the server
            const response = await axios.post('http://localhost:8000/api/auth/expenses/', formValues);
            // Handle the response
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            // Handle error
            console.error('Error submitting form:', error);
        }
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;

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
                    <div >
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
                        <input
                            type="number"
                            name="year"
                            id="year"
                            placeholder="2000"
                            value={formValues.year}
                            onChange={changeHandler}
                        />
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