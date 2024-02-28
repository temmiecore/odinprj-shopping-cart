import Nav from "./Nav";
import "../../styles/Header.css"
import { Link } from "react-router-dom";

function Header({
    headerTitle,
    shoppingCartItems,
}) {
    return <header>
        <div>
            <Link to="store"><img className="header-img" src="src/assets/store.png" alt="header image"/></Link>
            <h1 className="header-title">{headerTitle}</h1>
        </div>
        <Nav shoppingCartItems={shoppingCartItems}/>
    </header>
}

export default Header;