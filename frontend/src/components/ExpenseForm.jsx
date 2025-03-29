import { useState } from "react";
import { addExpense } from "../api";

const ExpenseForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = await addExpense({ name, amount, category });
        onAdd(newExpense);
        setName("");
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Expense Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
            <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;

