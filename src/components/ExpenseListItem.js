import React from 'react';
import {Link } from 'react-router-dom';
import moment from 'moment'
export const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{amount}
            - {moment(createdAt).format('Do-MM-YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;