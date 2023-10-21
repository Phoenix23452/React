import React from 'react'
import '../styles/ExpenseItem.css'



export default function ExpenseItem(props) {
  const month = props.expenses.date.toLocaleString('en-US', {'month': 'long'})
  const day = props.expenses.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.expenses.date.getFullYear()


  
    return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>

      </div>
      <div className='expense-item__description'>
        <h1>{props.expenses.title}</h1>
        <div className='expense-item__price'>$ {props.expenses.amount}</div>
      </div>
    </div>
  )
}
