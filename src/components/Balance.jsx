import React, { useContext } from "react";
import IncomeExpense from "./IncomeExpense";
import { ExpenseContext } from "../context/ExpenseState";

const Balance = () => {

  const {transactions} = useContext(ExpenseContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmounts = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <main className="flex flex-col m-2 p-2">
      <div className="shadow bg-gray-700 p-4 m-2 rounded flex justify-between">
        <p className="font-semibold">YOUR BALANCE</p>
        <span className="font-semibold text-green-500">${totalAmounts}</span>
      </div>
        <div>
        <IncomeExpense/>
        </div>
    </main>
  );
};
export default Balance;
