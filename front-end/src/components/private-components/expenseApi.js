import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export async function getAllExpensesForUser() {

    // const response = await axios.get('/api/auth/expenses/', {headers: {'Cookie': `auth_token=${userId}`}});
    const expenses = axios.get('/api/auth/expenses/')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return expenses
}



export async function getExpenseById(expenseId){
    const expense = await axios.get(`/api/auth/expenses/${expenseId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error
        });
    return expense
}

export async function deleteExpenseById(expenseId){
    const expense = await axios.delete(`/api/auth/expenses/${expenseId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error
        });
    return expense
}