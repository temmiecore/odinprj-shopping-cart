function CartItem({ item }) {
    return <div className="cart-item">
        <div className="cart-item-image-container"><img src={item.image} alt={item.title + "photo"}/></div>
        <div className="cart-item-info">
                <h3 className="item-name">{item.title}</h3>
                <div className="cart-item-qty">
                    <label htmlFor={"cart-item-qty"+item.id}>Quantity:</label>
                    <input type="number" id={"cart-item-qty"+item.id} value={item.quantity}/>
                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            <h3 className="item-price">Single: ${item.price} | Total: ${Math.round((item.price * item.quantity) * 100) / 100}</h3>
        </div>
    </div>
}

export default CartItem;