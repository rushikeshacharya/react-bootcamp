import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
        <ExpenseDate expenses={props.expenses}/>
      <div className="expense-item__description">
        <h2>{props.expenses.titlle}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
