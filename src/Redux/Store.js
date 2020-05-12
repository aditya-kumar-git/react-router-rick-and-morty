import { createStore, compose, applyMiddleware } from "redux"
import allReducers from "./Reducers"
import thunk from "redux-thunk"

var myStore = createStore(
	allReducers,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)
export default myStore
