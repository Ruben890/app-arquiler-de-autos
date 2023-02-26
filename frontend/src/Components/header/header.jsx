import { Carusel } from "./carusel/corusesl"
import { NavHeader } from "./nav/Nav"
import { Search } from "./search/Search"
const Header = () => {

    return (
        <header>
            <NavHeader />
            <Carusel />
            <Search />
        </header>
    )
}

export default Header