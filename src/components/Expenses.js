import ExpenseItem from "./ExpenseItem";
import '../styles/Expenses.css';
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem expenses = {props[0]}/>
      <ExpenseItem expenses = {props[1]}/>
      <ExpenseItem expenses = {props[2]}/>
      <ExpenseItem expenses = {props[3]}/>

    </div>
  );
}
 
export default Expenses;