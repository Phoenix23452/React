import React from 'react'
import '../styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';



export default function ExpenseItem(props) {




    return (
        <div className='expense-item'>
            <ExpenseDate date={props.expenses.date}/>
            <div className='expense-item__description'>
                <h1>{props.expenses.title}</h1>
                <div className='expense-item__price'>$ {props.expenses.amount}</div>
            </div>
        </div>
    )
}
