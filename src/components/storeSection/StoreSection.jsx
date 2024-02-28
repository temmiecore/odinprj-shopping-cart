import Item from "./Item"
import "../../styles/StoreSection.css"

function StoreSection({
   items,
   handleAddingItemToCart, 
  }) {
    return (
        <div className="store-section">
          {
            items.map(item => {
              return <Item 
              key={item.id}
              item={item} 
              handleAddingItemToCart={handleAddingItemToCart}/>
            })
          }
        </div>
    )
  }
  
export default StoreSection