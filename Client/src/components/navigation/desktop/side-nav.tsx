import React from 'react'
import { Link } from 'react-router-dom'

interface ISideNavMenu {
    title: string,
    pathTo: string
}

const SideNavMenu: ISideNavMenu[] = [
    { title: 'Exercise Plan', pathTo: '/exercise-plan' },
    { title: 'Stretches', pathTo: '/stretches' },
    { title: 'Training Journal', pathTo: '/training-journal' },
    { title: 'Profile', pathTo: '/profile' },
    { title: 'Account', pathTo: '/account' },
]

const SideNav = () => {
    const openSidebar = () => {
        console.log('hi there')
    }

    return (
        <div className='sidebar bg-white w-72 text-center overflow-y-auto lg:left-0 p-2'>
            <div className="text-xl p-0">
                <div className="p-2.5 mt-1 flex items-center ">
                    <h1 className="font-bold text-slate-900 text-[15px] ml-3">Make It Count</h1>
                    <i
                        className="bi bi-x cursor-pointer ml-28 lg:hidden"
                        onClick={openSidebar}
                    ></i>
                </div>
                <div className="pl-1 my-2 bg-slate-300 h-[2px]"></div>
            </div>

            {SideNavMenu.map((menuItem) => (
                <div key={menuItem.title} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-800"
                >
                    <Link to={menuItem.pathTo} className="text-[15px] ml-4 text-slate-400 font-bold hover:text-slate-50">{menuItem.title}</Link>
                </div>
            ))}
            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
        </div>
    )
}

export default SideNav