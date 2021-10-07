import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Calendar from './page/calendar/calendar'
import './assets/css/ham.scss'

const App = () => {
  const [side_bar, setside_bar] = useState(false);

  return (
    <div className="App">
      <div className={side_bar == false ? 'ham' : 'ham_click'}>
        <h2>사이드바</h2>
        <div class="three col">
          <div class="hamburger" id="hamburger-3">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <Route path="/" component={Calendar}></Route>
    </div>
  );
}
export default App;