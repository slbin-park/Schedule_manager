
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './assets/css/calendar.scss'
import Modal from '../modal/modal'
import Show_calendar from './Show_calendar'

const App = () => {
    const [modal, setmodal] = useState(false);
    const [modal_data, setmodal_data] = useState();
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
    useEffect(() => {
        console.log(modal_data)
    }, [modal_data])
    return (
        <div className="calendar">
            {modal ? <Modal setmodal={setmodal} modal_data={modal_data} setmodal_data={setmodal_data}  ></Modal> : ''}
            <div className="calendar_head">
                <button className='calendar_button' onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
                <div className='calendar_head_text'>{today.format('YYYY 년 MM 월')}</div>
                <button className='calendar_button' onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
                <button onClick={() => setmodal(!modal)}>모달 온</button>
            </div>
            <div className='calendar_body'>
                <div className='calendar_body_box'>
                    <Day_kor />
                    <Show_calendar modal_data={modal_data} setmodal={setmodal} setmodal_data={setmodal_data} today={today} />
                </div>
            </div>
        </div>
    );
}
export default App;

function Day_kor() {
    return (
        <>
            <div className='calendar_body_head'>
                <div style={{ color: 'red' }} className='calendar_body_head_days'>
                    일
        </div>
                <div className='calendar_body_head_days'>
                    월
        </div>
                <div className='calendar_body_head_days'>
                    화
        </div>
                <div className='calendar_body_head_days'>
                    수
        </div>
                <div className='calendar_body_head_days'>
                    목
        </div>
                <div className='calendar_body_head_days'>
                    금
        </div>
                <div className='calendar_body_head_days'>
                    토
        </div>
            </div>
        </>
    )
}