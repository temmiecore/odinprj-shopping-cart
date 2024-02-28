import CartItem from "./CartItem";
import "../../styles/CartItems.css"

function CartItems({
    shoppingCartItems,
    handleAddCartItem,
    handleRemoveCartItem,
    handleCartItemQuantity
}) {
    return <div className="cart-items">
        <h2>Shopping Cart</h2>
        <div className="cart-items-list">
            {
                shoppingCartItems.map(item => {
                    return <CartItem
                        key={item.id}
                        item={item}
                        handleAddCartItem={handleAddCartItem}
                        handleRemoveCartItem={handleRemoveCartItem}
                        handleCartItemQuantity={handleCartItemQuantity}
                    />
                })
            }
        </div>
    </div>
}

export default CartItems;