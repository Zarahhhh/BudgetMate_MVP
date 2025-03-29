import { useState } from "react";
import { addExpense } from "../api";

const ExpenseForm = ({ onExpenseAdded }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = await addExpense({ title, amount, category });
        onExpenseAdded(newExpense);  // Trigger refresh in App.jsx
        setTitle("");
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Expense Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Category" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                required 
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;

