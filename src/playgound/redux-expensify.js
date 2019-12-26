import React from 'react';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const p = () => {

  const addExpense = ({ 
    description = '', 
    note = '',
    amount = 0, 
    createdAt = 0 
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expenses: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  })


  const expensesReducerDefaultState = [];

  const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
      case 'ADD_EXPENSE':
        return [
          ...state,
          action.expenses
        ]
      default: 
        return state;
    }
  }

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

  // const demoState = {
  //   expenses: [{
  //     id: 'odkwkdwkd',
  //     description: 'January Rent',
  //     note: 'This was the final payment for that address',
  //     amount: 54500,
  //     createAt: 0,
  //   }],
  //   filters: {
  //     text: 'rent',
  //     sortBy: 'amount',
  //     startDate: undefined,
  //     endDate: undefined
  //   }
  // }

  return ( <div>Redux</div>  );
}
 
export default p;
