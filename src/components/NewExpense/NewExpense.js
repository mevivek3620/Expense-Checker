import {useState } from 'react';
import './NewExpense.css';
import NewForm from './NewForm';

const NewExpense = (props) =>{

    const [showForm,setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredData) =>{
        const expenseData = {
            ...enteredData,
            id : Math.random().toString()
        };
        props.onNewExpense(expenseData);
    }

    // console.log(showForm);
    const addNewExpenseHandler = () =>{
        console.log('Clicked');
        console.log(showForm);
        setShowForm(true);
    }

    const cancelDataHandler = () =>{
        setShowForm(false);
    }
    
    if(showForm === false){
        return(
            <div className = "new-expense">
                 <button onClick = {addNewExpenseHandler}>Add Neew Expense</button>
            </div>
        );    
    }

    return(
        <div className = "new-expense">
            <NewForm onSaveExpenseData = { saveExpenseDataHandler } onCancel = { cancelDataHandler}/>
        </div>
    );
}

export default NewExpense;