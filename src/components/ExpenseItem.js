import './ExpenseItem.css';

function ExpenseItem(props){

    return (
        <div className = "expense-item">
            <div className = "date">{props.date}</div>
            <div className = "desc">
                 <h2 className = "item">{props.title}</h2>
                 <div className = "amount">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;