import Item from "./Item"
import "../../styles/StoreSection.css"

function StoreSection({
   items,
   handleAddCartItem, 
  }) {
    return (
        <div className="store-section">
          {
            items.map(item => {
              return <Item 
              key={item.id}
              item={item} 
              handleAddCartItem={handleAddCartItem}/>
            })
          }
        </div>
    )
  }
  
export default StoreSection