import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense, index) => {
        return <ExpenseItem expenses={expense} />;
      })}
    </div>
  );
};
export default Expenses;
