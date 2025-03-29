import { useEffect, useState } from "react";
import { fetchExpenses } from "./api"; // Ensure api.js has the correct API URL

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExpenses()
      .then((data) => {
        setExpenses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch expenses");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>BudgetMate Expenses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.title} - ${expense.amount.toLocaleString()} on {new Date(expense.date).toDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

