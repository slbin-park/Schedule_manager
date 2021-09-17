import { useState } from 'react';
import moment from 'moment';
import './assets/css/modal.scss'



function Modal({ setmodal }) {
    const [x, setx] = useState(10000)
    const [y, sety] = useState(10000)
    const [endx, setendx] = useState(10000)
    const [endy, setendy] = useState(10000)

    const [start, setstart] = useState(moment().format('YYYYMMDD'))
    const [end, setend] = useState(moment().format('YYYYMMDD'))

    const close_modal = (e) => {
        e.preventDefault()
        if (e.target.className === 'modal') {
            setmodal(false)
        }
        if (e.target.className != 'modal_button_start') {
            setx(10000)
            sety(10000)
        }
        if (e.target.className != 'modal_button_end') {
            setendx(10000)
            setendy(10000)
        }
    }

    const show_calendar = (e) => {
        if (e.target.className == 'modal_button_start') {
            setx(e.clientY + 30)
            sety(e.clientX - 20)
        }
        if (e.target.className == 'modal_button_end') {
            setendx(e.clientY + 30)
            setendy(e.clientX - 20)
        }
    }

    return (
        <div className='modal' onClick={(e) => close_modal(e)} value={true}>
            <div >
                <div className='modal_div'>
                    <div className='modal_title'>
                        일정 추가하기
                    </div>
                    <div className='modal_body'>
                        내용입니다.
                        <textarea></textarea>
                        <div onClick={(e) => show_calendar(e)} >
                            <div>시작 일정</div>
                            <input className='modal_button_start' value={start} readOnly></input>
                        </div>
                        <div style={{ top: x, left: y, position: 'absolute' }} className='modal_calendar'>
                            <Day_kor></Day_kor>
                            <Date_picker setstart={setstart}></Date_picker>
                        </div>

                        <div onClick={(e) => show_calendar(e)} >
                            <div>종료 일정</div>
                            <input className='modal_button_end' value={end} readOnly></input>
                        </div>
                        <div style={{ top: endx, left: endy, position: 'absolute' }} className='modal_calendar'>
                            <Day_kor></Day_kor>
                            <Date_picker setstart={setend}></Date_picker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Date_picker({ setstart }) {
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
        result = result.concat(
            <div className='calendar_body_line' key={week}>
                {
                    Array(7).fill(0).map((data, index) => {
                        let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

                        if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                            return (
                                <div className='calendar_body_days' onClick={() => setstart(days.format('YYYYMMDD'))} key={index} >
                                    <span style={{ color: 'red' }}>{days.format('D')}</span>
                                </div>
                            );
                        } else if (days.format('MM') !== today.format('MM')) {
                            return (
                                <div className='calendar_body_days' onClick={() => setstart(days.format('YYYYMMDD'))} key={index} >
                                    <span style={{ color: 'gray' }}>{days.format('D')}</span>
                                </div>
                            );
                        } else {
                            return (
                                <div className='calendar_body_days' onClick={() => setstart(days.format('YYYYMMDD'))} key={index}  >
                                    <span>{days.format('D')}</span>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    }
    return result;
}



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


export default Modal;