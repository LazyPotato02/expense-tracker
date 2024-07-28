import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/user-management/AuthContext.jsx';
import Login from './components/user-management/Login.jsx';
import Register from './components/user-management/Register.jsx';
import Home from './components/public-components/Home.jsx';
import Navigation from "./components/public-components/Navigation.jsx";
import ProtectedRoute from './components/user-management/routeGuard.jsx';
import Dashboard from "./components/private-components/Dashboard.jsx";
import About from "./components/public-components/About.jsx";
import NotFound from "./components/public-components/NotFound.jsx";
import {ExpenseCreate} from "./components/private-components/ExpenseCreate.jsx";
import ExpensesDetails from "./components/private-components/ExpensesDetails.jsx";
import ExpenseEdit from "./components/private-components/ExpenseEdit.jsx";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Navigation />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes */}
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/expenses/create" element={<ProtectedRoute><ExpenseCreate /></ProtectedRoute>} />
                    <Route path="/expenses/details/:expenseId" element={<ProtectedRoute><ExpensesDetails /></ProtectedRoute>} />
                    <Route path="/expenses/edit/:expenseId" element={<ProtectedRoute><ExpenseEdit /></ProtectedRoute>} />

                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;