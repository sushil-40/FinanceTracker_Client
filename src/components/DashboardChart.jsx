import React from "react";
import { Row } from "react-bootstrap";
import { FaScaleBalanced } from "react-icons/fa6";
import {
  FaArrowDown,
  FaArrowUp,
  FaDollarSign,
  FaMoneyBillAlt,
} from "react-icons/fa";
export const DashboardChart = () => {
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
                <p className="card-text">5588</p>
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
                  5588
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
                  5588
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
            <h5 className="card-title">Expense Distribution</h5>
            {/* Pie Chart will go here */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Income Trend</h5>
            {/* Income Line Chart will go here */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Expense Trend</h5>
            {/* Expense Line Chart will go here */}
          </div>
        </div>
      </div>

      {/* Last Section: Bar Chart */}
      <div className="col-md-12 col-lg-12 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Income vs Expenses (Bar Chart)</h5>
            {/* Bar Chart will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};
