import { useContext, useId, useState } from "react";
import { ExpenseContext } from "../context/ExpenseState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(ExpenseContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random() * 10000,

      text,
      amount: Number(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Add Transaction</h2>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Name..."
            className="p-2 rounded w-full shadow bg-gray-700"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            className="p-2 rounded w-full shadow bg-gray-700"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="text-center m-2">
          <button
            type="submit"
            className="p-2 rounded bg-green-800 hover:bg-green-700"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTransaction;
