import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import Navigation from "./components/Navigation.jsx";
import ProtectedRoute from './components/routeGuard.jsx';
import Dashboard from "./components/Dashboard.jsx";
import About from "./components/About.jsx";
import NotFound from "./components/NotFound.jsx";

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

                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;