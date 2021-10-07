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
        <div class="ham_button" onClick={() => setside_bar(!side_bar)}>
          <div class={side_bar == false ? 'hamburger' : 'hamburger_click'}>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
        <div className='ham_menu'>
          <ul>
            <div className='ham_menu_box'>
              <div className='ham_menu_text'>
                메뉴1
              </div>
            </div>
            <div className='ham_menu_box'>
              <div className='ham_menu_text'>
                메뉴1
              </div>
            </div>
            <div className='ham_menu_box'>
              <div className='ham_menu_text'>
                메뉴1
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Route path="/" component={Calendar}></Route>
    </div>
  );
}
export default App;