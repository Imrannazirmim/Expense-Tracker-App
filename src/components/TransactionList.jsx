import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  return (
    <>
      <h2 className="font-semibold m-2">Transaction History</h2>
      <ul className="flex flex-col ">
        {transactions.map((transaction) => {
          const signBtn = transaction.amount < 0 ? "-" : "+";
          return (
            <li
              key={transaction.id}
              className="flex justify-between items-center bg-gray-700 w-full px-2 py-1 rounded m-2 border border-gray-600"
            >
              <p>{transaction.text}</p>
              <span
                className={
                  transaction.amount < 0 ? "text-red-400" : "text-green-500"
                }
              >
                {signBtn}${Math.abs(transaction.amount)}
              </span>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="px-2 rounded-full font-bold hover:bg-red-400 bg-red-500"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TransactionList;
