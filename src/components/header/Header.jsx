import Nav from "./nav/Nav";
import "../../styles/Header.css"

function Header({
    headerTitle,
}) {
    return <header>
        <div>
            <a href=""><img className="header-img" src="src/assets/store.png" alt="header image"/></a>
            <h1 className="header-title">{headerTitle}</h1>
        </div>
        <Nav />
    </header>
}

export default Header;