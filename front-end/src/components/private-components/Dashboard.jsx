import { useEffect, useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './Dashboard.module.css';
import getAllExpensesForUser from './expenseApi';
import ExpenseComponent from './ExpenseComponent';

function Dashboard() {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const result = await getAllExpensesForUser();
            setExpenses(result);
            setFilteredExpenses(result); // Initially show all expenses
        })();
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const monthParam = searchParams.get('month') || '';
        const yearParam = searchParams.get('year') || '';
        setMonth(monthParam);
        setYear(yearParam);
        filterExpenses(monthParam, yearParam);
    }, [location.search]);

    const filterExpenses = (month, year) => {
        const filtered = expenses.filter(expense => {
            const expenseMonth = expense.month.toString().padStart(2, '0');
            const expenseYear = expense.year.toString();
            return (!month || expenseMonth === month) &&
                (!year || expenseYear === year);
        });
        setFilteredExpenses(filtered);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/dashboard?month=${month}&year=${year}`);
    };

    return (
        <>
            <div className={styles.container}>
                <Link to="/create" className={styles.createButton}>Create New Expense</Link>
                <h1 className={styles.heading}>Dashboard</h1>

                <div className={styles.filterContainer}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="month">Month: </label>
                        <select id="month" value={month} onChange={handleMonthChange}>
                            <option value="">All</option>
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

                        <label htmlFor="year">Year: </label>
                        <select id="year" value={year} onChange={handleYearChange}>
                            <option value="">All</option>
                            <option value="2023">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2023">2020</option>
                            <option value="2023">2019</option>
                            <option value="2023">2018</option>
                            <option value="2023">2017</option>
                            <option value="2023">2016</option>

                            {/* Add more years as needed */}
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div className={styles.expenses}>
                {filteredExpenses.length > 0 ? (
                    filteredExpenses.map((expense) => (
                        <ExpenseComponent key={expense.id} expense={expense} />
                    ))
                ) : (
                    <p className={styles.noexpenses}>No expenses available.</p>
                )}
            </div>
        </>
    );
}

export default Dashboard;