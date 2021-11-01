import { useState } from 'react';
import './assets/css/ham.scss'

const Side_bar = ({ history }) => {
    console.log(history)
    const [side_bar, setside_bar] = useState(false);

    return (
        <div className={side_bar == false ? 'ham' : 'ham_click'}>
            <div className="ham_button" onClick={() => setside_bar(!side_bar)}>
                <div className={side_bar == false ? 'hamburger' : 'hamburger_click'}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <div className='ham_menu'>
                <ul>
                    <div className='ham_menu_box' onClick={() => history.push('/')}>
                        <div className='ham_menu_text'>
                            캘린더
              </div>
                    </div>
                    <div className='ham_menu_box' onClick={() => history.push('/todolist')}>
                        <div className='ham_menu_text'>
                            할일
              </div>
                    </div>
                    <div className='ham_menu_box'>
                        <div className='ham_menu_text'>
                            메뉴1
              </div>
                    </div>
                    <div className='ham_menu_box'>
                        <div className='ham_menu_text'>
                            메뉴2
              </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
export default Side_bar;