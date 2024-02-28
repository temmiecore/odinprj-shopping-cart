import CartCheckout from "./CartCheckout";
import CartItems from "./CartItems";

function Cart({
    shoppingCartItems,
}) {
    return <div className="cart">
        <CartItems shoppingCartItems={shoppingCartItems}/>
        <CartCheckout/>
    </div>
}

export default Cart;