import './App.css';
import { useState } from 'react';
import moment from 'moment';
import pr_data from './data/data.json'
import './assets/css/calendar.scss'
import './assets/css/modal.scss'
const App = () => {

  const [getMoment, setMoment] = useState(moment());
  const [modal, setmodal] = useState(false);
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {

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
                  <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index} >
                    <span style={{ color: 'red' }}>{days.format('D')}</span>
                    <Show_event days={days} />
                  </div>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index} >
                    <span style={{ color: 'gray' }}>{days.format('D')}</span>
                  </div>
                );
              } else {
                return (
                  <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index}  >
                    <span>{days.format('D')}</span>
                    <Show_event days={days} />
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

  return (
    <div className="App">
      {modal ? <Modal setmodal={setmodal}></Modal> : ''}
      <div className="calendar_head">
        <button className='calendar_button' onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
        <div className='calendar_head_text'>{today.format('YYYY 년 MM 월')}</div>
        <button className='calendar_button' onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
        <button onClick={() => setmodal(!modal)}>모달 온</button>
      </div>
      <div className='calendar_body'>
        <div className='calendar_body_box'>
          <Day_kor />
          {calendarArr()}
        </div>
      </div>
    </div>
  );
}
export default App;

function Show_event({ days }) {
  return (
    <>
      {
        pr_data.work.map((v, i) => {
          if (days.format('YYYYMMDD') == moment(v.start).format('YYYYMMDD')) {
            return <div key={i} onClick={() => console.log(v)} className='calendar_body_days_event'>{v.data}</div>
          }
        })
      }
    </>
  )
}

function Modal({ setmodal }) {
  return (
    <div className='modal' onClick={() => {
      setmodal(false)
      console.log('위에누름')
    }}>
      <div >
        <div className='modal_div' onClick={() => {
          setmodal(true)
          console.log('누름')
        }}>
          <div className='modal_title'>
            제목입니다.
          </div>
        </div>
      </div>
    </div>
  )
}
function Day_kor() {
  return (
    <>
      <div className='calendar_body_head'>
        <div className='calendar_body_head_days'>
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

