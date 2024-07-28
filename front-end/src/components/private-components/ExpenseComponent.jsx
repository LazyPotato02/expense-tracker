import PropTypes from 'prop-types';
import styles from './ExpenseComponent.module.css'
import {Link} from "react-router-dom";
export default function ExpenseComponent(props) {
    const expense = props.expense;
    return (
        <div className={styles.expense} key={expense.id}>
            <h3>{expense.title}</h3>
            <p>Amount: ${expense.amount}</p>
            <Link to={`/expenses/details/${expense.id}`}>Details</Link>
        </div>
    )
}

ExpenseComponent.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        creator: PropTypes.number.isRequired,
        amount: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};