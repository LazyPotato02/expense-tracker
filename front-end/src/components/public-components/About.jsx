import styles from './About.module.css'

export default function About() {

    return (
        <div className={styles.container}>
            <h1 >About Expense Tracker</h1>
            <p>Welcome to Expense Tracker, your go-to solution for easy and efficient financial management. Designed for individuals and businesses alike, our platform helps you track expenses, set budgets, and achieve financial goals seamlessly.</p>

            <h2 >Our Mission</h2>
            <p>We aim to empower you with the tools and insights needed for informed financial decisions, making financial freedom achievable for everyone.</p>

            <h2 >Key Features</h2>
            <ul>
                <li><strong>Expense Tracking:</strong> Log daily expenses effortlessly.</li>
                <li><strong>Detailed Reports:</strong> Understand spending patterns.</li>
                <li><strong>Budget Management:</strong> Stay on track with budgets.</li>
                <li><strong>Custom Categories:</strong> Personalize expense categories.</li>
                <li><strong>Secure:</strong> Top-notch data protection and privacy.</li>
            </ul>

            <h2 >Why Choose Us?</h2>
            <ul>
                <li><strong>User-Friendly:</strong> Intuitive design for hassle-free use.</li>
                <li><strong>Real-Time Updates:</strong> Stay updated with real-time notifications.</li>
                <li><strong>Cross-Platform:</strong> Access from any device, anywhere.</li>
                <li><strong>Expert Support:</strong> Dedicated assistance for any queries.</li>
            </ul>

            <h2 >Our Story</h2>
            <p>Founded to simplify financial management, Expense Tracker was born from our own struggles with budgeting. Today, we help thousands achieve their financial goals.</p>

            <h2 >Join Us</h2>
            <p>Start your journey to financial freedom with Expense Tracker. Sign up now and make every penny count!</p>
            <p>For inquiries or support, contact us at support@expensetracker.com</p>
        </div>
    );
}