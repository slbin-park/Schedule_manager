import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Calendar from './page/calendar/calendar'
import './assets/css/ham.scss'

const App = () => {

  return (
    <div className="App">
      <div className="ham">
        <h2>사이드바</h2>
      </div>
      <Route path="/" component={Calendar}></Route>
    </div>
  );
}
export default App;