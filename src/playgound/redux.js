import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import React from 'react';

const x = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
  })

  const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
  })

  const setCount = () => ({
    type: 'SET',
    count: 105
  })

  const setReset = () => ({
    type: 'RESET'
  })

  const countReducer = (state= { count: 0 }, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        }
      case 'SET':
        return {
          count: action.count
        }
      case 'RESET':
        return {
            count: 0
        }
      default: 
        return state;
    }
  }

  const store = createStore(countReducer, composeEnhancers(
    applyMiddleware(logger))
  )

  store.dispatch(incrementCount({ incrementBy: 5 }))

  store.dispatch(incrementCount());

  store.dispatch(decrementCount({ decrementBy: 5 }));

  store.dispatch(setCount());

  store.dispatch(setReset());


  return (
    <div>Redux</div>
  )
}

export default x;