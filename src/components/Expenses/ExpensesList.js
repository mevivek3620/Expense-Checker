import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.expenses.length === 0){
        return <h2 className = "expenses-list__fallback">Oops!! Nothing found</h2>;
    }

    return (
        <ul className = "expenses-list">
            {props.expenses.map(expense => (
            <ExpenseItem 
                title = {expense.title} 
                amount = {expense.amount} 
                date ={expense.date}
                key = {expense.id}></ExpenseItem>
            ))}
        </ul>
    );
}

export default ExpensesList;