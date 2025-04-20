import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseState";

const IncomeExpense = () => {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <section className="flex justify-between gap-4">
      <div className="shadow bg-gray-700 px-6 py-2 m-2 rounded">
        <p className="font-semibold text-green-500">INCOME</p>
        <span className="font-bold text-yellow-600">$ {income}</span>
      </div>
      <div className="shadow bg-gray-700 px-6 py-2 m-2 rounded">
        <p className="font-semibold text-red-400">EXPENCE</p>
        <span className="font-bold text-red-600">$ {expense}</span>
      </div>
    </section>
  );
};
export default IncomeExpense;
