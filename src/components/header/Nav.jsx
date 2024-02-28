import { Link, useLocation } from "react-router-dom";
import profile from "../../assets/profile.png";
import cart from "../../assets/cart.png";

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
                <img src={profile} alt="profile" />
            </Link>
            <Link className="nav-cart" to="cart">
                <img src={cart} alt="shopping cart" />
                <small>{countItems()}</small>
            </Link>
        </nav>
}

export default Nav;