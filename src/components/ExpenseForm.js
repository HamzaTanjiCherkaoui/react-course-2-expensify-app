import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


export default class ExpenseForm extends React.Component {
    
    state = {
        description :this.props.description? this.props.description : '',
        note :this.props.note,
        amount :(this.props.amount/100).toString(),
        createdAt:moment(this.props.createdAt),
        calendarFocused:false,
        error:''
    }
     onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>({amount}));
    }
    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState(()=>({createdAt}));
    }
    onFocusChange= ({focused}) => {
        this.setState(()=>({calendarFocused:focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(()=> ({error: 'Please provide description and amount ! '}))
        }
        else {
            this.setState(()=> ({error: ''}))
            this.props.onSubmit({
                description : this.state.description , 
                amount : parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note : this.state.note
            });
            
        }
    }
    render() {
        return (
            <div>
            { this.state.error && <p> {this.state.error} </p>}
                <form onSubmit = {this.onSubmit}>
                    <input 
                    type="text" 
                    placeholder="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="number"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange = {this.onAmountChange}
                    />
                    
                    <textarea
                     placeholder="add a note for your expense (optional)"
                     value={this.state.note}
                     onChange={this.onNoteChange}
                     >
                    </textarea>
                    <SingleDatePicker 
                    date = {this.state.createdAt}
                    focused = {this.state.calendarFocused}
                    onDateChange = {this.onDateChange}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {()=>false}

                    />
                    <button>{(this.props.id)?'Edit Expense':'Add Expense'} </button>
                </form>
            </div>
        )
    }
}

ExpenseForm.defaultProps ={state:{
    description :'',
    note :'',
    amount :'',
    createdAt:moment(),
    calendarFocused:false,
    error:''
}}