import React from 'react'
import NavBar from './navigation/desktop/nav-bar'

interface IPageLayoutProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <div className="flex flex-col items-center h-screen w-screen">
            <NavBar />
            <div className="flex flex-1 flex-col shrink-0 w-screen basis-auto mt-2 max-w-screen-xl">
                {children}
            </div>
        </div>

    )
}



export default PageLayout;