import React from 'react'
import NavBar from './navigation/desktop/nav-bar'
import SideNav from './navigation/desktop/side-nav'

interface IPageLayoutProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <div className='relative min-h-screen flex'>
            <SideNav />
            <div className='relative'>
                <div className='fixed h-full bg-slate-100 border-l-2'>
                    <NavBar />
                    <div className="my-0 bg-slate-300 h-[2px]"></div>
                    <div className='flex-1 p-3 text-2xl font-bold'>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}



export default PageLayout;