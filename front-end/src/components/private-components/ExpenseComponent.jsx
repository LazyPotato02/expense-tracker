import PropTypes from 'prop-types';

export default function ExpenseComponent(props) {
    const expense = props.expense;
    return (
        <div key={expense.id}>
            <h1>{expense.id}</h1>
            <h3>{expense.title}</h3>
            <p>Creator ID: {expense.creator}</p>
            <p>Amount: ${expense.amount}</p>
            <p>Description: {expense.description}</p>
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