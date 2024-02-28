import Button from "../Button";
import "../../styles/Item.css"

function Item( {
    item,
    handleAddingItemToCart,
} ) {
    return <div className="store-item">
        <div className="item-image-container"><img src={item.image} alt={item.title + "photo"}/></div>
        <div>
            <h3 className="item-name">{item.title}</h3>
            <h3 className="item-price">${item.price}</h3>
        </div>
        <Button text="+ Add to cart" isLink={false} onClick={() => handleAddingItemToCart(item)}/>
    </div>
}

export default Item;