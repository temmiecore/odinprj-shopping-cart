import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'
import StoreSection from './components/storeSection/StoreSection'

// Change <a> tags to <links> in:
// Button.jsx
// Nav.jsx
// Header.jsx

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const clothingItems = data
        .filter(item => item.category.includes("cloth"))
        .map(item => ({id:item.id, title:item.title, price:item.price, image:item.image}));
        setItems(clothingItems);
      });
  }, []);

  return (
    <div className="app">
    <Header headerTitle="Shop Name"/>
    <div className="divider"></div>
    <StoreSection items={items}/>
    </div>
  )
}

export default App
