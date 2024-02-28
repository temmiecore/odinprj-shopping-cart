import { Link, useLocation } from "react-router-dom";

function Nav({ shoppingCartItems }) {
    let location = useLocation();

    const countItems = () => {
        let count = 0;
        shoppingCartItems.forEach(item => count += item.quantity);
        return count;
    }
    
    return <nav>
            <Link className="nav-store" to="/">
                <h2>Home</h2>
            </Link>

            <Link to="profile">
                <img src="src/assets/profile.png" alt="profile" />
            </Link>
            <Link className="nav-cart" to="cart">
                <img src="src/assets/cart.png" alt="shopping cart" />
                <small>{countItems()}</small>
            </Link>
        </nav>
}

export default Nav;