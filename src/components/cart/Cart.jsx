import CartCheckout from "./CartCheckout";
import CartItems from "./CartItems";
import "../../styles/CartCheckout.css"

function Cart({
    shoppingCartItems,
    handleAddCartItem,
    handleRemoveCartItem,
    handleCartItemQuantity,
    setShoppingCartItems,
}) {
    return <div className="cart">
        <CartItems
            shoppingCartItems={shoppingCartItems}
            handleAddCartItem={handleAddCartItem}
            handleRemoveCartItem={handleRemoveCartItem}
            handleCartItemQuantity={handleCartItemQuantity} />
        <div className="divider"></div>
        <CartCheckout setShoppingCartItems={setShoppingCartItems}/>
    </div>
}

export default Cart;