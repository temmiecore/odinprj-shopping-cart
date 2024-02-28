import { Link, useLocation } from "react-router-dom";

function Nav({ shoppingCartItems }) {
    let location = useLocation();
    
    return <nav>
            { !location.pathname.includes("store") && (
                <Link className="nav-store" to="store">
                    <h2>To shop</h2>
                </Link>
            )}
            <Link to="profile">
                <img src="src/assets/profile.png" alt="profile" />
            </Link>
            <Link className="nav-cart" to="cart">
                <img src="src/assets/cart.png" alt="shopping cart" />
                <small>{shoppingCartItems.length}</small>
            </Link>
        </nav>
}

export default Nav;