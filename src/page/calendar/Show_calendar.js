
import React, { useState } from 'react';
import moment from 'moment';
import Show_event from './Show_event'
import pr_data from '../../data/data.json'


function CalendarArr({ today, modal_data, setmodal, setmodal_data }) {

    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const opend_modal = (days) => {
        setmodal_data()
        const data_arr = [];
        pr_data.work.map((v, i) => {
            if (days.format('YYYYMMDD') == moment(v.start).format('YYYYMMDD')) {
                data_arr.push(v)
            }
        })
        setmodal_data(data_arr)
        setmodal(true)
    }

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
                                <div className='calendar_body_days' onClick={() => opend_modal(days)} key={index} >
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
                                <div className='calendar_body_days' onClick={() => opend_modal(days)} key={index} >
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

export default React.memo(CalendarArr);