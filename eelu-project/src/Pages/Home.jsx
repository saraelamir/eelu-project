import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from './Home.module.css'; // استيراد CSS Module

const COLORS = ["#4682B4", "#1E90FF", "#00CED1", "#5F9EA0", "#87CEFA"];

function Home() {
  const [income, setIncome] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockData = {
      income: 20000,
      totalSavings: 60000,
      expenses: [
        { category: "Housing Expense", amount: 7000 },
        { category: "Entertainment Expense", amount: 1500 },
        { category: "Others", amount: 5000 },
        { category: "Food Expense", amount: 3000 },
        { category: "Transportation Expense", amount: 1500 },
        { category: "Savings", amount: 2000 },
      ],
    };

    setTimeout(() => {
      setIncome(mockData.income);
      setTotalSavings(mockData.totalSavings);
      setExpenses(mockData.expenses);
      setLoading(false);
    }, 1000);
  }, []);

  const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  const pieData = expenses
    .filter((exp) => exp.category !== "Savings")
    .map((exp) => ({
      name: exp.category,
      value: exp.amount,
      percentage: ((exp.amount / totalExpenses) * 100).toFixed(2), // حساب النسبة المئوية
    }));

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className={`container py-4 px-5 ${styles.container}`}>
      {/* العنوان على الشمال */}
      <h2 className="mb-4 text-start">Home Page</h2>

      {/* المستطيلين بتوع income/savings بطول أكبر */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div
            className={`p-4 text-white rounded text-center ${styles.bgSuccess}`}
            style={{ height: "120px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h5>Your Income</h5>
            <p>{income} L.E</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div
            className={`p-4 text-white rounded text-center ${styles.bgInfo}`}
            style={{ height: "120px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h5>Total Savings</h5>
            <p>{totalSavings} L.E</p>
          </div>
        </div>
      </div>

      {/* الست مربعات */}
      <div className="row mb-5">
        {expenses.map((exp, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className={`p-3 text-white rounded h-100 text-center ${exp.category === "Savings"
                ? styles.bgDanger
                : index % 2 === 0
                  ? styles.bgPrimary
                  : styles.bgSecondary}`}
            >
              <div>{exp.category}</div>
              <div>{exp.amount} L.E</div>
              {exp.category === "Savings" && (
                <div>
                  <small className={styles.savingsText}>4 months left to reach your goal</small>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* سكشن الباي شارت بباك جراوند وفي النص */}
      <div className="py-4 px-3" style={{ backgroundColor: "#3DA4C6", borderRadius: "12px" }}>
        <div className="row justify-content-center align-items-center">
          {/* Pie chart */}
          <div className="col-md-6">
            <h5 className="text-center mb-3">Expense Breakdown</h5>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={({ percent }) => `${(percent * 100).toFixed(2)}%`} // عرض النسبة المئوية
                    labelLine={false} // تعطيل الخطوط التي تربط النسب
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Legend */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h6 className="mb-3">Categories</h6>
            <ul className={`list-unstyled ${styles.listUnstyled}`}>
              {pieData.map((entry, index) => (
                <li
                  key={index}
                  className="d-flex align-items-center mb-2"
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: COLORS[index % COLORS.length],
                      marginRight: 10,
                      borderRadius: "50%", // هنا حولنا اللون الى شكل دائري
                    }}
                  ></div>
                  {entry.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
