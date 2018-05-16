import  { setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate } from '../../actions/filters';
import moment from 'moment';
test('should setup set text action object with provided text',()=> {
const action = setTextFilter('Rent');
expect(action).toEqual({
    type : 'SET_TEXT_FILTER',
    text : 'Rent'
    });
});

test('should setup set text action object with no text provided',()=> {
const action = setTextFilter();
expect(action).toEqual({
    type : 'SET_TEXT_FILTER',
    text : ''
    });
});

test('should setup sort by amount action object',()=> {
const action = sortByAmount();
expect(action).toEqual({
    type : 'SORT_BY_AMOUNT',
    });
});
test('should setup sort by date action object',()=> {
const action = sortByDate();
expect(action).toEqual({
    type : 'SORT_BY_DATE',
    });
});
test('should setup start date action object',()=> {
const action = setStartDate(moment(1000));
expect(action).toEqual({
    type : 'SET_START_DATE',
    startDate : moment(1000)
    });
});
test('should setup end date action object',()=> {
const action = setEndDate(moment(1000));
expect(action).toEqual({
    type : 'SET_END_DATE',
    endDate : moment(1000)
    });
});