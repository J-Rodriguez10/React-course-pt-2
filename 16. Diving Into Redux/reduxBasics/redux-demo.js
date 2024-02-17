// importing redux
const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// store
const store = redux.createStore(counterReducer);

// subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribing store to subscription
store.subscribe(counterSubscriber);

// creating and dispatching an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
