import { useEffect, useState } from "react";
import { fetchExpenses } from "../api";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses().then(setExpenses);
    }, []);

    return (
        <ul>
            {expenses.map(expense => (
                <li key={expense._id}>{expense.name} - ${expense.amount} ({expense.category})</li>
            ))}
        </ul>
    );
};

export default ExpenseList;

