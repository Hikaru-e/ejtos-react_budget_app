import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, expenses, dispatch, currency  } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);


    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
        if (!isNaN(newBudget) && newBudget >= 1 && newBudget <= 20000) {
            setEditableBudget(newBudget);
        } else {
            alert("Budget must be between 1 and 20000.");
        }
    };

    const handleSaveBudget = () => {
        if (editableBudget >= totalExpenses) {
            dispatch({ type: "SET_BUDGET", payload: editableBudget });
        } else {
            alert("You cannot reduce the budget value lower than the spending.");
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>
                Budget: {currency}
                <input
                    required
                    className="mx-2"
                    type="number"
                    min={1}
                    max={20000}
                    value={editableBudget}
                    onChange={handleBudgetChange}
                />
                <button className='btn btn-sm btn-warning' onClick={handleSaveBudget}>Update</button>
            </span>
        </div>
    );
};

export default Budget;
