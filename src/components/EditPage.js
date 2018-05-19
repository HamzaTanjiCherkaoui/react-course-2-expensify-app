import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense} from '../actions/expenses';
import {startRemoveExpense} from '../actions/expenses';

const EditPage = (props) => {
    return (
        <div>
            Editing the expense :
            <ExpenseForm
                {...props.expense}
                onSubmit={(expense) => {
                props.dispatch(startEditExpense(props.match.params.id,expense)).then(()=>{
                    props.history.push("/");
                });
                
            }}/>
            <button
            onClick={() => {
            props.dispatch(startRemoveExpense(props.match.params.id)).then(()=>{
                props.history.push("/");
            });
            
        }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state
            .expenses
            .find(e => e.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditPage);