//Initial State

import { createContext, useReducer } from "react";
import { ExpenseReducer } from "./ExpenseReducer";

const initailState = {
  transactions: [
    // { id: 1, text: "Computer", amount: -400 },
    // { id: 2, text: "Laptop", amount: 200 },
    // { id: 3, text: "Mobile", amount: -100 },
    // { id: 4, text: "Book", amount: 150 },
  ],
};

export const ExpenseContext = createContext(initailState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initailState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD", payload: transaction });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
