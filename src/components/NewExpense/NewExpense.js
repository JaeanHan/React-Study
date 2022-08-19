import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [mode, setMode] = useState(false);

  const onSaveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const buttonClickhandler = () => {
    setMode((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <div className="new-expense">
      {mode ? (
        <ExpenseForm
          onCancelClick={buttonClickhandler}
          onSaveExpenseDate={onSaveExpenseDateHandler}
        />
      ) : (
        <button onClick={buttonClickhandler} type="button">
          Add New Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
