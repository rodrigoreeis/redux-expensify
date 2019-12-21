import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'odkwkdwkd',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}