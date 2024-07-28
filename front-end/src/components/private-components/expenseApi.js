import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


export default async function getAllExpensesForUser() {



    // const response = await axios.get('/api/auth/expenses/', {headers: {'Cookie': `auth_token=${userId}`}});
    const expenses = axios.get('/api/auth/expenses/', {
        withCredentials: true // Include cookies with the request
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return expenses
}