import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import blogReducer from "../reducers/blogReducer";
import thunk from "redux-thunk";
import wishReducer from "../reducers/wishReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({ blog: blogReducer, wish: wishReducer }),
    compose(applyMiddleware(thunk))
  );
  return store;
};
export default configureStore;
