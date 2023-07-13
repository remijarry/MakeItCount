import { useState } from "react";

const PopOver = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popoverClassNames, setPopoverClassNames] = useState('transition duration-150 ease-in-out md:mt-0 mt-8 top-0 left-0 w-10/12 md:w-1/2');

    const togglePopover = () => {
        setIsOpen(!isOpen);
        isOpen ?
            setPopoverClassNames('transition duration-150 ease-in-out md:mt-0 mt-8 top-0 left-0 w-10/12 md:w-1/2') :
            setPopoverClassNames('transition duration-150 ease-in-out md:mt-0 mt-8 top-0 left-0 w-10/12 md:w-1/2 hidden');

    }
    return (
        <div className="flex md:flex-row flex-col items-start justify-start pt-2 w-full">
            <div id="popover" className={popoverClassNames}>
                <div className="w-full bg-white rounded shadow-2xl">
                    {/* <div className="relative rounded-t py-1 px-4 xl:px-8">
                        <svg className="hidden md:block absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                        <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                            <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <svg className="absolute top-0 -mt-5 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                            <path id="Polygon 2" d="M13 0L25.9904 22.5H0.00961876L13 0Z" fill="#e5e7eb" />
                        </svg>
                    </div> */}
                    <div className="w-full h-full px-4 xl:px-8 pt-3 pb-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="mr-4 w-12 h-12 rounded shadow">
                                    <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_0.png" alt="avatar" />
                                </div>
                                <div>
                                    <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Andres Berlin</h3>
                                    <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                                </div>
                            </div>
                            <div className="relative font-normal text-xs sm:text-sm flex items-center text-gray-600">
                                <select aria-label="select access" className="cursor-pointer focus:text-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 w-full appearance-none pr-8 py-1 pl-2">
                                    <option>Can view</option>
                                    <option>Can edit</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="py-6 flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="mr-4 w-12 h-12 rounded shadow">
                                    <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_1.png" alt="avatar" />
                                </div>
                                <div>
                                    <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Andres Berlin</h3>
                                    <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                                </div>
                            </div>
                            <div className="relative font-normal text-xs sm:text-sm flex items-center text-gray-600">
                                <select aria-label="select access" className="cursor-pointer focus:text-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600  w-full appearance-none pr-8 py-1 pl-2">
                                    <option>Can edit</option>
                                    <option>Can view</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="mr-4 w-12 h-12 rounded shadow">
                                    <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                                </div>
                                <div>
                                    <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Andres Berlin</h3>
                                    <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                                </div>
                            </div>
                            <div className="relative font-normal text-xs sm:text-sm flex items-center text-gray-600">
                                <select aria-label="select access" className="cursor-pointer focus:text-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 w-full appearance-none pr-8 py-1 pl-2">
                                    <option>Can view</option>
                                    <option>Can edit</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const WeekSelector = () => {
    const openSelector = () => {
        console.log('selector opened');
    }

    return (
        <>
            <div className='flex flex-row'>
                <button className='text-xl font-bold text-slate-500 mr-10' type='button' onClick={openSelector}>
                    Week 1
                </button>
                <p className='flex items-end'>
                    <svg className='fill-slate-500 stroke-2'
                        width="10px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" /></svg>
                </p>
            </div>
            <PopOver />
        </>
    )
}

export default WeekSelector