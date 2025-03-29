import { useEffect, useState } from "react";
import { fetchExpenses } from "./api"; 
import ExpenseForm from "./components/ExpenseForm"; // ✅ Import ExpenseForm

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to reload expenses
  const loadExpenses = () => {
    setLoading(true);
    fetchExpenses()
      .then((data) => {
        setExpenses(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch expenses");
        setLoading(false);
      });
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div>
      <h1>BudgetMate Expenses</h1>

      {/* ✅ Add ExpenseForm */}
      <ExpenseForm onExpenseAdded={loadExpenses} />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              {expense.title} - ${expense.amount.toLocaleString()} on {new Date(expense.date).toDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

