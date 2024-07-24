import styles from './Home.module.css'

const Home = () => {
    // display home view like any normal site that has home view in it/ information and more

    return (
        <div>
            <div className={styles.homeTitle}>
                <h1>Welcome to BudgetMate: Your Personal Expense Tracker!</h1>
                <p>Managing your finances has never been easier! BudgetMate helps you track your expenses, set budgets, and achieve your financial goals with ease. Whether you're saving for a big purchase, paying off debt, or simply want to understand where your money goes, BudgetMate provides the tools you need.</p>
            </div>

            <div className={styles.homeHero}>
                <div>
                    <h2>Why Choose BudgetMate?</h2>
                    <p>BudgetMate is designed with simplicity in mind. Our intuitive interface ensures that you spend less time managing your finances and more time enjoying what matters most. Join our community of smart savers and start taking control of your financial future today!</p>
                </div>
                <div>
                    <h2>Get Started Now!</h2>
                    <p>Sign up for free and take the first step towards better financial management. Start tracking, budgeting, and saving with BudgetMate—your trusted partner in financial health.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;