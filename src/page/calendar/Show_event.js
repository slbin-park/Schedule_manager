
import React, { useState } from 'react';
import moment from 'moment';
import pr_data from '../../data/data.json'

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
export default React.memo(Show_event);
