import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className=' rounded bg-success text-white'>
            <AiOutlinePlusCircle size='2em' onClick={event=> increaseAllocation(props.name)}></AiOutlinePlusCircle>
            </button></td>
        <td><button className=' rounded bg-warning'>
            <AiOutlineMinusCircle size='2em' onClick={event=> decreaseAllocation(props.name)}></AiOutlineMinusCircle>
            </button></td>
        <td><button className=' rounded bg-danger text-white'>
            <TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete>
            </button></td>
        </tr>
    );
};

export default ExpenseItem;