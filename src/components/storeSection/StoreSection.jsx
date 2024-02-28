import Item from "./Item"
import "../../styles/StoreSection.css"

function StoreSection( { items } ) {
    return (
        <div className="store-section">
          {
            items.map(item => {
              return <Item key={item.id} name={item.title} imageSrc={item.image} price={item.price}/>
            })
          }
        </div>
    )
  }
  
  export default StoreSection