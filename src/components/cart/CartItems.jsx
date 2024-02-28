import CartItem from "./CartItem";
import "../../styles/CartItems.css"

function CartItems({
    shoppingCartItems,
}) {
    return <div className="cart-items">
        <h2>Shopping Cart</h2>
        <div className="cart-items-list">
            {
                shoppingCartItems.map(item => {
                    return <CartItem key={item.id} item={item}/>                    
                })
            }
        </div>
    </div>
}

export default CartItems;