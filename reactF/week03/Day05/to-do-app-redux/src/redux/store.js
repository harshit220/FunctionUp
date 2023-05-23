import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";

export default legacy_createStore(rootReducer, applyMiddleware(logger));
