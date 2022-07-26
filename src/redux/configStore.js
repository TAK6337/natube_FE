import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import Names from "./modules/Name";

const rootReducer = combineReducers({Names});

const store = createStore(rootReducer);

export default store;