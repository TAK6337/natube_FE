import {legacy_createStore as createStore, combineReducers} from "redux";
import natube from "./modules/natube";
import Name from "./modules/Name";


const rootReducer = combineReducers({ natube, Name });

const store = createStore(rootReducer);

export default store;