import React, { useEffect, useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(0);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    var list = localStorage.getItem("expenseList");
    if (list) {
      setExpenseList(JSON.parse(list));
    }
  }, [])
  
  useEffect(() => {
    if (expenseList.length > 0) {
      var currBalance = 0;
      expenseList.forEach(data => {
        if (data.type === 'add') {
          currBalance += parseInt(data.value);
        } else if (data.type === 'remove') {
          currBalance -= parseInt(data.value);
        }
      })
      localStorage.setItem("expenseList", JSON.stringify(expenseList));
      setBalance(currBalance);
    }
  }, [expenseList])
  return (
    <div className="container">
      <h1>Expense Tracker - Basic</h1>
      <div className="form">
        <p>Balance : {balance}</p>
        <ExpenseForm
          expenseList={expenseList}
          handleExpenseList={setExpenseList}
        />
      </div>
      <div className='list'>
        <ExpenseList
          expenseList={expenseList}
          handleExpenseList={setExpenseList}
        />
      </div>
    </div>
  );
}

export default ExpenseTracker