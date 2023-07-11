import NavBarBrand from './nav-bar-brand'
import NavBarButtons from './nav-bar-button'

const NavBar = () => {
    return (
        <div className="
        fixed 
        flex 
        justify-center 
        shrink-0 
        w-screen 
        bg-black 
        z-50
        ">
            <nav className="flex flex-1 items-center shrink-0 h-20 max-w-screen-xl pr-6 pl-6 m-0">
                <NavBarBrand />
                <NavBarButtons />
            </nav>
        </div>
    )
}

export default NavBar