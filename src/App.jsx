import React from "react";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

const App = () => {
  return (
    <main className="flex flex-col text-gray-300 justify-between lg:w-[60%] mx-auto mt-10 p-4 bg-gray-800 shadow rounded">
      <Header />
      <div className="w-full">
        <Balance />
      </div>
      <section className="flex md:justify-between flex-col  m-2 p-4">
        {/* <IncomeExpense /> */}
        <AddTransaction />
        <div>
          <TransactionList />
        </div>
      </section>
    </main>
  );
};
export default App;
