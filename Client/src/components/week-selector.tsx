import React from 'react'
const openSelector = () => {
    console.log('selector opened');
}


const WeekSelector = () => {
    return (
        <div className='flex flex-row'>
            <button className='text-xl font-bold text-slate-500 mr-10' type='button' onClick={openSelector}>
                Week 1
            </button>
            <p className='flex items-end'>
                <svg className='fill-slate-500 stroke-2'
                 width="10px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" /></svg>
            </p>
        </div>
    )
}

export default WeekSelector