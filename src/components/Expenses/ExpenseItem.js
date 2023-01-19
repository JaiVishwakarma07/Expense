import React, { useState } from 'react';
//this usestate is used to reflect changes and tell the react that state has been changed
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
//props will repesent all the values in the custom data from app.js file
const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);//must be called directly inside of function
    //this will required the special variable
    //usestate always gives brand new state of the variable whenever the component is loaded
    // console.log('expense item compomnt evaluated');
    // const clickHandler = () => {
    //     setTitle('Updated');//this will not only update new value but also excute the whole compomnt again
    // };
    // const expensedate = new Date(2021, 2, 28);
    // const expensetitle = 'Car Insurance';
    // const expenseamount = 294;
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();
    return (
        <li>
            <Card className="expense-item">

                {/* <div> {props.date.toISOString()} </div> */}
                {/* <div>
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
</div> */}
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2> {props.title}</h2>
                    <div className='expense-item__price'>{props.amount}rs</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    )
    // inside a component there is only one root component allowed 
}

export default ExpenseItem;