import {  applyMiddleware, createStore } from "@reduxjs/toolkit"; 
import thunk from "redux-thunk";
import MainReducers from "../Reducer/Combain";
import { composeWithDevTools } from "redux-devtools-extension";

const store =  createStore(MainReducers,composeWithDevTools(applyMiddleware(thunk)))

export default store; 