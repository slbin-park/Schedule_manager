import { useState, useEffect } from 'react';
import './assets/css/todolist.scss'

const Todolist = ({ match }) => {
    const [data, set_data] = useState([])
    const [text, set_text] = useState('')
    const add_todo = () => {
        if (text != '') {
            set_data(prev => {
                return [...prev
                    , { item: text, state: 'left', index: data.length + 1 }]
            })
        }
    }
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='todolist' >
            <div className='todolist_title'>
                <h1>
                    작성합시다🔥🔥
                </h1>
            </div>
            <div className='todolist_content'>
                <div className='todolist_left'>
                    <div className='todolist_title_box'>
                        <h1>
                            Todo_list
                </h1>
                        <button onClick={() => add_todo()} className='add_button'>
                            +
                </button>
                        <input value={text} onChange={(e) => set_text(e.target.value)}></input>
                    </div>
                    {
                        data != undefined ? data.map((v, i) => {
                            return (
                                <div key={i} className='todolist_subbox'>
                                    <h2>{v.item}</h2>
                                    <button className='sub_add_button'>+</button>
                                </div>
                            )
                        }) : ''
                    }
                </div>
                <Todolist_mid />
                <div className='todolist_end'>
                    <h1>
                        Todo_list_End
                </h1>
                </div>
            </div>
        </div >
    );
}

const Todolist_mid = () => {

    return (
        <div className='todolist_mid'>
            <h1>
                Todo_list_continue
            </h1>
        </div>
    );

}
export default Todolist;