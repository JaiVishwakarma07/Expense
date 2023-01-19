import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (e) => {
        //getting value from form
        setEnteredTitle(e.target.value);
        //this approach is depended on the previous state  
        // setUserInput({
        //     //this will copy the previous state and add date to new state so that previous date not be loss
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        //noice way
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value };
        // });
        // console.log(e.target.value);
    };
    const AmountChangeHandler = (e) => {
        setEnteredAmout(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
        // console.log(e.target.value);
    };
    const DateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
        // console.log(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        //this is two way binding we clear feilds after gathering data
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmout('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    {/* Gathering Inputs */}
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={enteredDate} max='2023-01-01' onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>)
};

export default ExpenseForm;