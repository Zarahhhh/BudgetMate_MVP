import axios from "axios";

const API_URL = "https://budgetmate-mvp.onrender.com/api/expenses";

export const fetchExpenses = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const addExpense = async (expense) => {
    const res = await axios.post(API_URL, expense);
    return res.data;
};

