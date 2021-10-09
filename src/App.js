import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Calendar from './page/calendar/calendar'
import Sidebar from './page/sidebar/sidebar'
import Todolist from './page/todolist/todolist'

const App = ({ match }) => {

  return (
    <div className="App">
      <Route path="/" component={Sidebar}></Route>
      <Route exact path="/" component={Calendar}></Route>
      <Route exact path="/todolist" component={Todolist}>
      </Route>
    </div>
  );
}
export default App;