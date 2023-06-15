import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './compo';
// import MyName from './hooks';
import TodoList from './array_using_hooks';
import {BrowserRouter} from 'react-router-dom';

//const myLists = ['A', 'B', 'C', 'D', 'E']; 
ReactDOM.render(
  <>
<BrowserRouter>
{/* <App myLists={myLists}/> */}
<TodoList/>
</BrowserRouter></>
,document.getElementById("root"));

