import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import TodoList from "../../components/TodoList";
import todos from "./todos";
export default combineReducers({ todos, visibilityFilter });
