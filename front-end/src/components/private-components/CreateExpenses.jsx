import {useContext, useEffect, useRef, useState} from "react";
import Cookies from 'js-cookie'
import {AuthContext} from "../user-management/AuthContext.jsx";
import axios from "axios";

export function CreateExpenses() {
    const {userId}= useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        creator:userId.data.id,
        amount: '',
        description: '',
        year: '',
        month: '',
    })
    // const inputRef = useRef();

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

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
        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value,
        }));
    };
    return (
        <>
            <h1>Create Expense</h1>
            <form onSubmit={formSubmitHandler}>

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
                    <input
                        type="text"
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
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </>
    )

}