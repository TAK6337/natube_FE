import {legacy_createStore as createStore, combineReducers} from "redux";
import natube from "./modules/natube";

const rootReducer = combineReducers({ natube });

const store = createStore(rootReducer);

export default store;