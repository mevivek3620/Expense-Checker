import {useState} from 'react';
// import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2021');

    const showSelectedYear = (year) =>{
        setFilteredYear(year); 
    }
    
    const filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === filteredYear);    

    return(
        <div className = "expenses">
            <ExpenseFilter selected = {filteredYear} onChangeYear = { showSelectedYear }/>
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList expenses = { filteredExpenses }/>
        </div>
        
    );
}

export default Expenses;