import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavBar = () => {
    return (
        <div className='
            bg-gray-800
            text-gray-100
        '>
            <Link to='/' className='
                block p-4
                text-white
                font-bold
            '
            >
                Make It Count
            </Link>
        </div>
    )
}

export default MobileNavBar