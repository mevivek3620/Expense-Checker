import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import './ExpensesList.css'


function ExpenseItem(props){

    return (
        <li className = "expenses-list">
            <div className = "expense-item">
                <ExpenseDate date = {props.date}/>
                <div className = "expense-item__description">
                    <h2>{props.title}</h2>
                    <div className = "expense-item__price">${props.amount}</div>
                </div>
            </div>
        </li>
    );
}

export default ExpenseItem;