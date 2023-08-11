import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: "CHG_CURRENCY", payload: newCurrency });
    };

    return (
        <div className="mb-3">
            <label htmlFor="currency" className="form-label">Select Currency:</label>
            <select id="currency" className="form-select" value={currency} onChange={handleCurrencyChange}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="₹">₹ Rupee</option>
                <option value="€">€ Euro</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
