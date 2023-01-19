import React from "react";
import ExpenseForm from "./ExpenseForm";


import './NewExpense.css'
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }


    return (
        <div className="new-expense">
            {/* this onSaveExpenseData is custom prop */}
            {/* this is the lifting the state up sending the data to parent compoment */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;

