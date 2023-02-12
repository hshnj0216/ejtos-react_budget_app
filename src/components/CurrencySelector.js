import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return(
        <div className="alert alert-success">
            <label>
                Select Currency:
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </label>
        </div>
    );

}

export default CurrencySelector;