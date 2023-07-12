import NavBarBrand from './nav-bar-brand'
import NavBarButtons from './nav-bar-button'

const NavBar = () => {
    return (
        <>
            <div className="flex justify-center shrink-0 w-screen bg-white z-50">
                <nav className="flex flex-1 items-center shrink-0 h-[68px] max-w-screen-xl pr-6 pl-6 m-0">
                    <NavBarButtons />
                </nav>
            </div>
        </>
    )
}

export default NavBar