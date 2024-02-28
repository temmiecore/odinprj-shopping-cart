import Button from "../Button";

function CartCheckout({ setShoppingCartItems }) {
    return <div className="cart-checkout">
        <h2>Checkout</h2>
            <p>
                Thank you for shopping with us! You're just one step away from completing your purchase.
                Please review your cart items and proceed to checkout to finalize your order.
            </p>
            <Button text="Checkout!" isLink={false} onClick={() => setShoppingCartItems([])}/>
    </div>
}

export default CartCheckout;