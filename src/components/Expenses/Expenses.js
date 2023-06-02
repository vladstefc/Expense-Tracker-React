import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

export default function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const addFilteredYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearFilter={addFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
