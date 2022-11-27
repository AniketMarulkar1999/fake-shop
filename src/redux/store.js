import {createStore} from "redux";
import reducers from "./reducers/index";

//createStore takes 2 arguments -> reducers & state
//Reduxdev tools extension is used to visualise changes in store
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
