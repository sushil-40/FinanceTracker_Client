import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { FaScaleBalanced } from "react-icons/fa6";
import {
  FaArrowDown,
  FaArrowUp,
  FaDollarSign,
  FaMoneyBillAlt,
} from "react-icons/fa";
import IncomeExpensePieChart from "./chart/IncomeExpensePieChart.jsx";

import IncomeExpenseBarChart from "./chart/IncomeExpenseBarChart.jsx";
import { useUser } from "../context/UserContext";
import IncomeExpenseTrendChart from "./chart/IncomeExpenseTrendChart.jsx";
export const DashboardChart = () => {
  // get all details of income and expense here

  const { transactions, getTransactions } = useUser();

  const [listOfTransactions, setListOfTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    setListOfTransactions(transactions);
  }, [transactions]);

  console.log("all transactions: ", listOfTransactions);

  const totalIncome = listOfTransactions?.reduce((acc, trans) => {
    return trans.type === "income" ? acc + trans.amount : acc;
  }, 0);

  const totalExpense = listOfTransactions?.reduce((acc, trans) => {
    return trans.type === "expenses" ? acc + trans.amount : acc;
  }, 0);

  const data = [
    {
      id: "income",
      label: "income",
      value: totalIncome,
      // color: "rgba(69, 189, 0, 0.97)",
    },

    {
      id: "expense",
      label: "expense",
      value: totalExpense,
      //  color: "rgb(235, 62, 9)"
    },
  ];

  const incomeTransactionData = listOfTransactions
    .filter((trans) => trans.type === "income")
    .sort((a, b) => new Date(a.tDate) - new Date(b.tDate));
  const expenseTransactionData = listOfTransactions
    .filter((trans) => trans.type === "expenses")
    .sort((a, b) => new Date(a.tDate) - new Date(b.tDate));
  console.log("Expense", expenseTransactionData);
  console.log("income =", incomeTransactionData);
  const incomeExpenseTrendData = [
    {
      id: "Income",
      data: incomeTransactionData.map((trans) => ({
        x: trans.tDate.slice(0, 10),
        y: trans.amount,
      })),
    },
    {
      id: "Expense",
      data: expenseTransactionData.map((trans) => ({
        x: trans.tDate.slice(0, 10), // Date
        y: trans.amount, // Amount
      })),
    },
  ];

  const incomeData = incomeExpenseTrendData.find(
    (item) => item.id === "Income"
  );
  const expenseData = incomeExpenseTrendData.find(
    (item) => item.id === "Expense"
  );
  // Prepare data for the bar chart
  // Step 1: Create a set of all unique dates from both income and expense transactions
  const allDates = [
    ...new Set([
      ...incomeTransactionData.map((trans) => trans.tDate.slice(0, 10)),
      ...expenseTransactionData.map((trans) => trans.tDate.slice(0, 10)),
    ]),
  ];

  // Step 2: Merge the income and expense data for each date
  const incomeExpenseData = allDates
    .map((date) => {
      // Find the income and expense for the current date
      const income = incomeTransactionData.find(
        (trans) => trans.tDate.slice(0, 10) === date
      );
      const expense = expenseTransactionData.find(
        (trans) => trans.tDate.slice(0, 10) === date
      );
      return {
        date,
        income: income ? income.amount : 0, // Use 0 if no income found for the date
        expense: expense ? expense.amount : 0, // Use 0 if no expense found for the date
      };
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="dashboard-wrapper row">
      {/* First Section: Balance, Income, Expense */}
      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body d-flex align-items-center balance">
            <div className="icon-container">
              <FaScaleBalanced
                size={60}
                style={{ color: "rgb(37, 187, 174)" }}
              />
            </div>
            <div className="content-container ms-3 p-2">
              <Row>
                <h6 className="card-title" style={{ color: "blue" }}>
                  Balance
                </h6>{" "}
                <hr />
              </Row>
              <Row>
                <p className="card-text">{totalIncome - totalExpense}</p>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body d-flex align-items-center income">
            <div className="icon-container">
              <FaDollarSign size={60} style={{ color: "rgb(17, 54, 6)" }} />
              <FaArrowDown size={30} style={{ color: "green" }} />
            </div>
            <div className="content-container ms-3 p-2">
              <Row>
                <h6 className="card-title" style={{ color: "white" }}>
                  Income
                </h6>{" "}
                <hr />
              </Row>
              <Row>
                <p className="card-text" style={{ color: "white" }}>
                  {totalIncome}
                </p>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body d-flex align-items-center expense">
            <div className="icon-container">
              <FaMoneyBillAlt size={60} style={{ color: "rgb(45, 156, 54)" }} />
              <FaArrowUp size={30} style={{ color: "red" }} />
            </div>
            <div className="content-container ms-3 p-2">
              <Row>
                <h6 className="card-title" style={{ color: "white" }}>
                  Expense
                </h6>{" "}
                <hr />
              </Row>
              <Row>
                <p className="card-text" style={{ color: "white" }}>
                  {totalExpense}
                </p>
              </Row>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Pie, Income-Line, Expense-Line */}
      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Financial Distribution</h5>
            <div style={{ height: "300px" }}>
              {/* Pass data to the IncomeExpensePieChart component */}
              <IncomeExpensePieChart data={data} />
            </div>
            {/* Pie Chart will go here */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Income Trend</h5>
            <div style={{ height: "300px" }}>
              <IncomeExpenseTrendChart data={[incomeData]} />
            </div>
            {/* Income Line Chart will go here */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Expense Trend</h5>

            {/* Expense Line Chart will go here */}
            <div style={{ height: "300px" }}>
              <IncomeExpenseTrendChart data={[expenseData]} />
            </div>
          </div>
        </div>
      </div>

      {/* Last Section: Bar Chart */}
      <div className="col-md-12 col-lg-12 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Income vs Expenses (Bar Chart)</h5>
            {/* Bar Chart will go here */}
            <div style={{ height: "300px" }}>
              <IncomeExpenseBarChart data={incomeExpenseData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
