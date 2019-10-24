import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Login from './page/login/Login'
import Home from './page/home/Home'
import Table from './page/table/Table'
import List from './page/list/List'
import List1 from './page/list/List1'
import List2 from './page/list/List2'
import Table1 from './page/table/Table1'
import Table2 from './page/table/Table2'
import {
  BrowserRouter as Router,Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import routes from '../../router/index';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home}>
       </Route>
       <Route  path="/login" component={Login}></Route>
     </Switch>
   </Router>
  );
}

export default App;
