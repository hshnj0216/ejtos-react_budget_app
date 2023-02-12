import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const handleChange = (e) => {
        dispatch({ type: 'SET_BUDGET', payload: e.target.value });
    };

    return (
        <div className="alert alert-secondary">
            <label>Budget: {currency}</label>
            <input 
                type="number" 
                value={budget} 
                onChange={handleChange}
                step={10}
            />
        </div>
    );
};

export default Budget;
