import {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './Dashboard.module.css';
import {getAllExpensesForUser} from './expenseApi.js';
import ExpenseComponent from './ExpenseComponent.jsx';

function Dashboard() {
    const [formMonth, setFormMonth] = useState('');
    const [formYear, setFormYear] = useState('');
    const [filterMonth, setFilterMonth] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const result = await getAllExpensesForUser();
            setExpenses(result);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const monthParam = searchParams.get('month') || '';
        const yearParam = searchParams.get('year') || '';
        setFilterMonth(monthParam);
        setFilterYear(yearParam);
        setFormMonth(monthParam);
        setFormYear(yearParam);
    }, [location.search]);

    useEffect(() => {
        if (!isLoading) {
            filterExpenses(filterMonth, filterYear);
        }
    }, [filterMonth, filterYear, expenses, isLoading]);

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
        setFormMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setFormYear(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilterMonth(formMonth);
        setFilterYear(formYear);
        navigate(`/dashboard?month=${formMonth}&year=${formYear}`);
    };

    return (
        <>
            <div className={styles.container}>
                <Link to="/expenses/create" className={styles.createButton}>Create New Expense</Link>
                <h1 className={styles.heading}>Dashboard</h1>

                <div className={styles.filterContainer}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="month">Month: </label>
                        <select id="month" value={formMonth} onChange={handleMonthChange}>
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
                        <select id="year" value={formYear} onChange={handleYearChange}>
                            <option value="">All</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div className={styles.expenses}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredExpenses.length > 0 ? (
                        filteredExpenses.map((expense) => (
                            <ExpenseComponent key={expense.id} expense={expense}/>
                        ))
                    ) : (
                        <p className={styles.noexpenses}>No expenses available.</p>
                    )
                )}
            </div>
        </>
    );
}

export default Dashboard;
