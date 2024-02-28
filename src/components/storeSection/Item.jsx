import Button from "../Button";
import "../../styles/Item.css"

function Item( {
    name,
    imageSrc,
    price
} ) {
    return <div className="store-item">
        <div className="item-image-container"><img src={imageSrc} alt={name + "photo"}/></div>
        <div>
            <h3 className="item-name">{name}</h3>
            <h3 className="item-price">${price}</h3>
        </div>
        <Button text="+ Add to cart" isLink={false}/>
    </div>
}

export default Item;